import { baseApiUrl, basePath, worldAbi, worldContract } from '@/constants';
import { db } from '@/db';
import { delegation, transaction } from '@/db/schema';
import buildQueryString from '@/helpers/build-query-string';
import logger from '@/helpers/logger';
import type { RequestWithId } from '@/middlewares/automatic-logger';
import type { NextPageParams, Transaction } from '@/types/transaction';
import axios from 'axios';
import { desc, eq } from 'drizzle-orm';
import express from 'express';
import { decodeFunctionData } from 'viem';
const router = express.Router();

interface UserTransactions {
    items: Transaction[];
    next_page_params?: NextPageParams;
}

interface SyncResponse {
    transactionsSynced: number;
    errors: { error: unknown; tx: string }[];
}

// Add middleware to parse JSON bodies
router.use(express.json());

router.post('/sync', async (req: RequestWithId, res) => {
    const { userAddress } = req.body;

    if (!userAddress) {
        logger.error('Missing required field: userAddress');
        return res.status(400).json({
            error: 'Missing required field: userAddress',
        });
    }

    const userDelegation = await db.query.delegation.findFirst({
        where: eq(delegation.userAddress, userAddress.toLowerCase()),
    });

    if (!userDelegation) {
        logger.error('User has not delegated any session');
        return res.status(400).json({
            error: 'User has not delegated any session',
        });
    }

    const { sessionAddress } = userDelegation;

    let nextPageParams = {};

    const latestTransaction = await db.query.transaction.findFirst({
        where: eq(transaction.wallet, userAddress.toLowerCase()),
        orderBy: desc(transaction.timestamp),
    });

    const result: SyncResponse = {
        transactionsSynced: 0,
        errors: [],
    };

    logger.info(`Syncing transactions for user ${userAddress} in session ${sessionAddress}`);
    while (true) {
        const response = await axios.get(
            `${baseApiUrl + sessionAddress + basePath}&${buildQueryString(nextPageParams)}`,
        );

        const transactionsList: UserTransactions = response.data;
        if (!transactionsList.items.length) {
            break;
        }

        for (const tx of transactionsList.items) {
            if (latestTransaction && tx.hash === latestTransaction.hash) {
                break;
            }

            try {
                const txData = decodeFunctionData({
                    abi: worldAbi,
                    data: tx.raw_input as `0x${string}`,
                });

                if (txData.functionName === 'callFrom') {
                    const innerData = decodeFunctionData({
                        abi: worldContract,
                        data: txData.args[2],
                    });

                    const argsInString = innerData.args.map(
                        (
                            value:
                                | number
                                | `0x${string}`
                                | bigint
                                | { x: number; y: number; parentEntity: `0x${string}` }
                                | readonly bigint[]
                                | readonly `0x${string}`[]
                                | readonly number[],
                        ) => {
                            if (typeof value === 'object') {
                                return JSON.stringify(value);
                            }
                            return value.toString();
                        },
                    );

                    await db
                        .insert(transaction)
                        .values({
                            functionName: innerData.functionName,
                            args: argsInString,
                            wallet: txData.args[0].toLowerCase(),
                            timestamp: tx.timestamp,
                            hash: tx.hash,
                        })
                        .execute();
                }
                result.transactionsSynced++;
            } catch (error) {
                result.errors.push({
                    error,
                    tx: tx.hash,
                });
            }
        }

        if (!transactionsList.next_page_params) {
            break;
        }
        nextPageParams = transactionsList.next_page_params;
    }

    logger.info(`Synced ${result.transactionsSynced} transactions`, {
        requesId: req.requestId,
        userAddress,
        sessionAddress,
    });
    res.json({
        data: result,
    });
});

router.get('/:userAddress', async (req, res) => {
    const { userAddress } = req.params;

    if (!userAddress || typeof userAddress !== 'string') {
        return res.status(400).json({
            error: 'Missing required field: userAddress',
        });
    }

    try {
        const transactions = await db.query.transaction.findMany({
            where: eq(transaction.wallet, userAddress.toLowerCase()),
            orderBy: desc(transaction.timestamp),
        });

        res.json({
            data: transactions,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to retrieve transactions',
        });
    }
});

export default router;

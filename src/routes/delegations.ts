import { db } from '@/db';
import { delegation } from '@/db/schema';
import logger from '@/helpers/logger';
import { eq } from 'drizzle-orm';
import express from 'express';
const router = express.Router();

// Add middleware to parse JSON bodies
router.use(express.json());

router.post('/create', async (req, res) => {
    const { userAddress, sessionAddress } = req.body;

    if (!userAddress || !sessionAddress) {
        logger.error('Missing required fields: userAddress and sessionAddress');
        return res.status(400).json({
            error: 'Missing required fields: userAddress and sessionAddress',
        });
    }

    try {
        const newDelegation = await db
            .insert(delegation)
            .values({
                userAddress: userAddress.toLowerCase(),
                sessionAddress: sessionAddress.toLowerCase(),
            })
            .returning()
            .execute();

        res.json({
            data: newDelegation,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({
            error: 'Failed to create delegation',
        });
    }
});

router.put('/update', async (req, res) => {
    const { userAddress, sessionAddress } = req.body;

    if (!userAddress || !sessionAddress) {
        logger.error('Missing required fields: userAddress and sessionAddress');
        return res.status(400).json({
            error: 'Missing required fields: userAddress and sessionAddress',
        });
    }

    try {
        const updatedDelegation = await db
            .update(delegation)
            .set({
                sessionAddress: sessionAddress.toLowerCase(),
            })
            .where(eq(delegation.userAddress, userAddress.toLowerCase()))
            .returning()
            .execute();

        res.json({
            data: updatedDelegation,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({
            error: 'Failed to update delegation',
        });
    }
});

router.get('/:userAddress', async (req, res) => {
    const { userAddress } = req.params;

    if (!userAddress || typeof userAddress !== 'string') {
        return res.status(400).json({
            error: 'Missing required field: userAddress',
        });
    }

    try {
        const sessionWallet = await db.query.delegation.findFirst({
            where: eq(delegation.userAddress, userAddress.toLowerCase()),
        });

        if (!sessionWallet) {
            return res.status(404).json({
                error: 'Session not found',
            });
        }
        res.json({
            data: sessionWallet?.sessionAddress,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to retrieve transactions',
        });
    }
});

export default router;

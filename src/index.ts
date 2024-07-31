import { db } from '@/db';
import { transaction } from '@/db/schema';
import logger from '@/helpers/logger';
import { delegations, quests, transactions } from '@/routes';
import cors from 'cors';
import express from 'express';
import { automaticLogger } from './middlewares';

const app = express();
const port = 3000;

app.use(cors());
app.use(automaticLogger);

app.get('/', async (req, res) => {
    try {
        const result = await db.select().from(transaction);
        res.json(result);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.use('/transactions', transactions); // Use the transaction routes
app.use('/quests', quests);
app.use('/delegations', delegations);

app.listen(port, () => {
    logger.info(`Server running at http://localhost:${port}`);
});

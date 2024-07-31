import { db } from '@/db';
import { quest } from '@/db/schema';
import logger from '@/helpers/logger';
import { desc, eq } from 'drizzle-orm';
import express from 'express';
const router = express.Router();

// Add middleware to parse JSON bodies
router.use(express.json());

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        logger.error('Missing required field: id');
        return res.status(400).json({
            error: 'Missing required field: id',
        });
    }

    try {
        const existingQuest = await db.query.quest.findFirst({
            where: eq(quest.id, Number(id)),
        });
        if (!existingQuest) {
            logger.error('Quest not found');
            return res.status(404).json({ error: 'Quest not found' });
        }

        await db
            .delete(quest)
            .where(eq(quest.id, Number(id)))
            .returning()
            .execute();

        res.json({
            message: 'Quest deleted successfully',
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.put('/deactivate', async (req, res) => {
    const { id } = req.body;

    if (!id) {
        logger.error('Missing required field: id');
        return res.status(400).json({
            error: 'Missing required field: id',
        });
    }

    try {
        const updatedQuest = await db
            .update(quest)
            .set({
                active: false,
            })
            .where(eq(quest.id, Number(id)))
            .returning()
            .execute();
        res.json({
            data: updatedQuest,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.put('/activate', async (req, res) => {
    const { id } = req.body;

    if (!id) {
        logger.error('Missing required field: id');
        return res.status(400).json({
            error: 'Missing required field: id',
        });
    }

    try {
        const updatedQuest = await db
            .update(quest)
            .set({
                active: true,
            })
            .where(eq(quest.id, Number(id)))
            .returning()
            .execute();
        res.json({
            data: updatedQuest,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.post('/create', async (req, res) => {
    const { name, points, condition } = req.body;

    if (!name || !points || !condition) {
        logger.error('Missing required fields');
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const result = await db.insert(quest).values({
            name,
            points,
            condition,
            active: true,
        });
        res.json({
            data: result,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.get('/active', async (req, res) => {
    try {
        const result = await db.query.quest.findMany({
            where: eq(quest.active, true),
            orderBy: desc(quest.points),
        });
        res.json({
            data: result,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.get('/all', async (req, res) => {
    try {
        const result = await db.query.quest.findMany({
            orderBy: desc(quest.points),
        });
        res.json({
            data: result,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

export default router;

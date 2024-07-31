import { quests } from '@/constants/sample-quests';
import { db } from './index';
import { quest } from './schema';

async function seedQuests() {
    try {
        // Delete existing data
        await db.delete(quest).execute();

        // Insert sample quest data
        for (const sampleQuest of quests) {
            await db.insert(quest).values(sampleQuest).execute();
        }

        console.log('Quests table seeded successfully!');
    } catch (error) {
        console.error('Error seeding quests table:', error);
    }
}

seedQuests();

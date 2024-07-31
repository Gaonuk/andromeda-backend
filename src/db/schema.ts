import type { QuestCondition } from '@/types/quest';
import { boolean, integer, jsonb, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const transaction = pgTable('transaction', {
    id: serial('id').primaryKey(),
    functionName: text('function_name').notNull(),
    args: text('args').array().notNull(),
    wallet: text('wallet').notNull(),
    timestamp: text('timestamp').notNull(),
    hash: text('hash').notNull(),
});

export const quest = pgTable('quest', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    condition: jsonb('condition').$type<QuestCondition>().notNull(),
    active: boolean('active').notNull().default(true),
    points: integer('points').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const delegation = pgTable('delegation', {
    id: serial('id').primaryKey(),
    userAddress: text('user_address').notNull(),
    sessionAddress: text('session_address').notNull(),
});

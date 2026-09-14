import { sql } from 'drizzle-orm';
import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const moodEntries = sqliteTable(
  'mood_entries',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    mood: text('mood').notNull(),
    createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [index('idx_mood_entries_mood_created_at').on(table.mood, table.createdAt)],
);

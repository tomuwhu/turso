import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
    id: text('id').primaryKey(),
    passwordHash: text('password_hash').notNull(),
    username: text('username').notNull().unique(),
    name: text('name'),
    email: text('email').notNull(),
    groupID: integer('group_id').notNull(),
    projectURL: text('project_url')
});

export const session = sqliteTable("session", {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => user.id),
    expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

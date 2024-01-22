import { sql } from 'drizzle-orm';
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const mysqlTable = mysqlTableCreator((name) => `cc3_${name}`);

export const users = mysqlTable(
  'user',
  {
    id: varchar('id', { length: 255 }).notNull().primaryKey(),
    name: varchar('name', { length: 256 }),
    email: varchar('email', { length: 256 }).notNull().unique(),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updated_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull()
      .onUpdateNow(),
  },
  (table) => ({
    nameIndex: index('name_idx').on(table.name),
  }),
);

export const sessions = mysqlTable(
  'session',
  {
    id: varchar('id', { length: 255 }).notNull().primaryKey(),
    userId: varchar('user_id', { length: 255 }).notNull(),
    activeExpires: bigint('active_expires', { mode: 'number' }).notNull(),
    idleExpires: bigint('idle_expires', { mode: 'number' }).notNull(),
  },
  (table) => ({
    userIdIndex: index('user_id_idx').on(table.userId),
  }),
);

export const keys = mysqlTable(
  'key',
  {
    id: varchar('id', { length: 255 }).notNull().primaryKey(),
    userId: varchar('user_id', { length: 255 }).notNull(),
    hashedPassword: varchar('hashed_password', { length: 255 }),
  },
  (table) => ({
    userIdIndex: index('user_id_idx').on(table.userId),
  }),
);

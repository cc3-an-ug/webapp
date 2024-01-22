import { drizzle } from 'drizzle-orm/planetscale-serverless';

import { Client } from '@planetscale/database';

import * as schema from './schema';

export const dbClient = new Client({
  url: process.env.DATABASE_URL || '',
});

export const db = drizzle(dbClient.connection(), {
  schema,
});

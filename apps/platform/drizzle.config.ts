import { type Config } from 'drizzle-kit';

const config: Config = {
  driver: 'mysql2',
  tablesFilter: ['cc3_*'],
  schema: './src/server/db/schema.ts',
  dbCredentials: { uri: process.env.DATABASE_URL || '' },
};

export default config;

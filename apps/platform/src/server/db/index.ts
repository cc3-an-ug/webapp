import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';
import SqlString from 'sqlstring';

import { Client } from '@planetscale/database';

import { DBConfig } from '@/config/db';

import type { DB } from './types';

export const client = new Client({
  url: DBConfig.url,
});

export const db = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
    url: DBConfig.url,
    format: SqlString.format,
  }),
});

export { sql } from 'kysely';

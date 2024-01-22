import { lucia } from 'lucia';
import { nextjs_future } from 'lucia/middleware';

import { planetscale } from '@lucia-auth/adapter-mysql';

import { client } from './db';

export const auth = lucia({
  middleware: nextjs_future(),
  sessionCookie: { expires: false },
  env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
  adapter: planetscale(client.connection(), {
    user: 'User',
    session: 'Session',
    key: 'Key',
  }),
  getUserAttributes: (data) => {
    return {
      id: data.id,
      email: data.email,
    };
  },
});

export type Auth = typeof auth;

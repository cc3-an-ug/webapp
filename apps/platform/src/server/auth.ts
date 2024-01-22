import { lucia } from 'lucia';
import { nextjs_future } from 'lucia/middleware';
import { cookies, headers } from 'next/headers';
import { cache } from 'react';

import { planetscale } from '@lucia-auth/adapter-mysql';

import { dbClient } from './db';

export const auth = lucia({
  middleware: nextjs_future(),
  sessionCookie: { expires: false },
  env: process.env.NODE_ENV === 'development' ? 'DEV' : 'PROD',
  adapter: planetscale(dbClient.connection(), {
    user: 'cc3_user',
    session: 'cc3_session',
    key: 'cc3_key',
  }),
  getUserAttributes: (data) => {
    return {
      id: data.id,
      email: data.email,
    };
  },
});

export type Auth = typeof auth;

export const getPageSession = cache(() => {
  const authRequest = auth.handleRequest('GET', {
    headers: headers,
    cookies: cookies,
  });

  return authRequest.validate();
});

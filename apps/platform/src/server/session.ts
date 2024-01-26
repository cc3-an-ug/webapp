import * as context from 'next/headers';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { cache } from 'react';

import { auth } from './auth';

export const getSession = cache(async () => {
  const authRequest = auth.handleRequest('GET', context);
  const session = await authRequest.validate();

  if (!session || !session.user.id) {
    redirect('/auth/signin');
  }

  const user = await auth.getUser(session.user.id);

  return user;
});

export const redirectIfAuth = cache(async () => {
  const authRequest = auth.handleRequest('GET', context);
  const session = await authRequest.validate();

  if (session && session.user.id) {
    redirect('/');
  }
});

export const getSessionFromReq = async (req: NextRequest) => {
  const authRequest = auth.handleRequest(req.method, context);
  const session = await authRequest.validate();

  if (!session || !session.user.id) {
    return null;
  }

  const user = await auth.getUser(session.user.id);

  return user;
};

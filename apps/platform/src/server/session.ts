import * as context from 'next/headers';
import { redirect } from 'next/navigation';
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

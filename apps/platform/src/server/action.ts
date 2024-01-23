import * as context from 'next/headers';
import { createSafeActionClient } from 'next-safe-action';

import { auth } from './auth';

export const publicAction = createSafeActionClient({});

export const privateAction = createSafeActionClient({
  middleware: async () => {
    const authRequest = auth.handleRequest('POST', context);
    const session = await authRequest.validate();

    if (!session || !session.user) {
      throw new Error('Unauthorized');
    }

    return {
      user: session.user,
    };
  },
});

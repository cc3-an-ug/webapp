'use server';

import { LuciaError } from 'lucia';
import * as context from 'next/headers';

import { publicAction } from '@/server/action';
import { auth } from '@/server/auth';

import { Schema } from './schema';

export const signIn = publicAction(Schema, async ({ email, password }) => {
  try {
    // get key from DB
    const key = await auth.useKey('email', email, password);

    // create session based on user id
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {},
    });

    const authRequest = auth.handleRequest('POST', context);
    authRequest.setSession(session);

    return {
      id: session.sessionId,
    };
  } catch (error) {
    if (error instanceof LuciaError) {
      return {
        failure: 'Credenciales incorrectas.',
      };
    } else {
      return {
        failure: 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.',
      };
    }
  }
});

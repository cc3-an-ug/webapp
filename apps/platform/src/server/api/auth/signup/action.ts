'use server';

import { LuciaError } from 'lucia';
import * as context from 'next/headers';

import { DatabaseError } from '@planetscale/database';

import { VerifyUserEmail } from '@cc3/transactional/emails/verify';

import { publicAction } from '@/server/action';
import { auth } from '@/server/auth';
import { resend } from '@/server/resend';
import { getBaseUrl } from '@/server/shared';
import { generateToken } from '@/server/token';

import { Schema } from './schema';

export const signUp = publicAction(Schema, async ({ email, password }) => {
  try {
    const user = await auth.createUser({
      key: {
        providerId: 'email',
        providerUserId: email.toLowerCase(),
        password,
      },
      attributes: {
        email: email.toLowerCase(),
        email_verified: Number(false),
      },
    });

    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });

    const authRequest = auth.handleRequest('POST', context);
    authRequest.setSession(session);

    const token = await generateToken('UserVerificationToken', user.userId);

    await resend.emails.send({
      to: email,
      from: 'noreply@cc3an.org',
      subject: 'Restablecer contraseña',
      react: VerifyUserEmail({
        email,
        verifyLink: `${getBaseUrl()}/auth/verify/${token}`,
      }),
    });

    return {
      id: user.id,
    };
  } catch (error) {
    if (error instanceof LuciaError) {
      return {
        failure: 'Credenciales incorrectas.',
      };
    } else if (
      error instanceof DatabaseError &&
      error.message.includes('Duplicate entry')
    ) {
      return {
        failure: `El correo electrónico '${email}' ya está en uso.`,
      };
    } else {
      return {
        failure: 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.',
      };
    }
  }
});

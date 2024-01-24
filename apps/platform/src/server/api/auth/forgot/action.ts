'use server';

import { LuciaError } from 'lucia';

import { ForgotPasswordEmail } from '@cc3/transactional/emails/forgot';

import { publicAction } from '@/server/action';
import { auth } from '@/server/auth';
import { db } from '@/server/db';
import { resend } from '@/server/resend';
import { getBaseUrl } from '@/server/shared';
import { generateToken } from '@/server/token';

import { Schema } from './schema';

export const forgotPassword = publicAction(Schema, async ({ email }) => {
  try {
    const storedUser = await db
      .selectFrom('User')
      .selectAll()
      .where('email', '=', email)
      .executeTakeFirst();

    if (!storedUser) {
      return {
        success: true,
      };
    }

    const user = auth.transformDatabaseUser(storedUser);
    const token = await generateToken('PasswordResetToken', user.userId);

    const r = await resend.emails.send({
      to: email,
      from: 'noreply@cc3an.org',
      subject: 'Restablecer contraseña',
      react: ForgotPasswordEmail({
        email,
        resetLink: `${getBaseUrl()}/auth/reset?${new URLSearchParams({ token })}`,
      }),
    });

    if (r.error) {
      return {
        failure: 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.',
      };
    }

    return {
      success: true,
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

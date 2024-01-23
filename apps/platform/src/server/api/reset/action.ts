'use server';

import { publicAction } from '@/server/action';
import { auth } from '@/server/auth';
import { validateToken } from '@/server/token';

import { ResetSchema } from './schema';

export const resetPassword = publicAction(
  ResetSchema,
  async ({ token, password }) => {
    try {
      const userId = await validateToken('PasswordResetToken', token);
      let user = await auth.getUser(userId);
      await auth.invalidateAllUserSessions(user.userId);
      await auth.updateKeyPassword('email', user.email, password);

      if (!user.email_verified) {
        user = await auth.updateUserAttributes(user.userId, {
          email_verified: Number(true),
        });
      }

      return {
        success: true,
      };
    } catch (error) {
      return {
        failure: 'Link inválido o expirado. Inténtalo de nuevo.',
      };
    }
  },
);

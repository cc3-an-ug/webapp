'use server';

import { privateAction } from '@/server/action';
import { db } from '@/server/db';
import { generateToken } from '@/server/token';

import { Schema } from './schema';

export const createToken = privateAction(
  Schema,
  async ({ assignmentId }, { user }) => {
    try {
      const token = await generateToken('AssignmentToken', user.userId, {
        assignment_id: assignmentId,
      });

      return {
        token,
      };
    } catch (error) {
      return {
        failure: 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.',
      };
    }
  },
);

export const rotateToken = privateAction(
  Schema,
  async ({ assignmentId }, { user }) => {
    try {
      await db
        .deleteFrom('AssignmentToken')
        .where('assignment_id', '=', assignmentId)
        .where('user_id', '=', user.userId)
        .execute();

      const token = await generateToken('AssignmentToken', user.userId, {
        assignment_id: assignmentId,
      });

      return {
        token,
      };
    } catch (error) {
      return {
        failure: 'Ocurrió un error inesperado. Inténtalo de nuevo más tarde.',
      };
    }
  },
);

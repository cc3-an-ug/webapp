import { notFound } from 'next/navigation';
import { cache } from 'react';

import { db } from '@/server/db';
import { getSession } from '@/server/session';

export const getAssignment = cache(async (id: string) => {
  const session = await getSession();

  const [assignment, submits, token] = await Promise.all([
    db
      .selectFrom('Assignment')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst(),
    db
      .selectFrom('Submit')
      .selectAll()
      .where('user_id', '=', session.id)
      .where('assignment_id', '=', id)
      .orderBy('created_at', 'desc')
      .execute(),
    db
      .selectFrom('AssignmentToken')
      .select(['id'])
      .where('user_id', '=', session.id)
      .where('assignment_id', '=', id)
      .executeTakeFirst(),
  ]);

  if (!assignment) {
    notFound();
  }

  return {
    ...assignment,
    submits,
    maxScore: submits.reduce((acc, submit) => Math.max(acc, submit.grade), 0),
    token: token?.id || null,
  };
});

export const getAssignmentByUser = async (id: string, userId: string) => {
  const [assignment, submits, token] = await Promise.all([
    db
      .selectFrom('Assignment')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst(),
    db
      .selectFrom('Submit')
      .selectAll()
      .where('user_id', '=', userId)
      .where('assignment_id', '=', id)
      .orderBy('created_at', 'desc')
      .execute(),
    db
      .selectFrom('AssignmentToken')
      .select(['id'])
      .where('user_id', '=', userId)
      .where('assignment_id', '=', id)
      .executeTakeFirst(),
  ]);

  if (!assignment) {
    notFound();
  }

  return {
    ...assignment,
    submits,
    maxScore: submits.reduce((acc, submit) => Math.max(acc, submit.grade), 0),
    token: token?.id || null,
  };
};

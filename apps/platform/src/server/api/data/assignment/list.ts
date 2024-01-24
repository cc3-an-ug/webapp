import { cache } from 'react';

import { db } from '@/server/db';
import { getSession } from '@/server/session';

export const listAssignments = cache(async () => {
  const session = await getSession();

  const [assignments, submits] = await Promise.all([
    db.selectFrom('Assignment').selectAll().orderBy('due', 'asc').execute(),
    db
      .selectFrom('Submit')
      .selectAll()
      .where('user_id', '=', session.id)
      .orderBy('created_at', 'desc')
      .execute(),
  ]);

  return assignments.map((assignment) => ({
    ...assignment,
    submits: submits.filter((submit) => submit.assignment_id === assignment.id),
    maxScore: submits.reduce((acc, submit) => Math.max(acc, submit.grade), 0),
  }));
});

import { db } from '@/server/db';

export const listAssignments = async (userId: string) => {
  const [assignments, submits] = await Promise.all([
    db.selectFrom('Assignment').selectAll().orderBy('due', 'asc').execute(),
    db
      .selectFrom('Submit')
      .selectAll()
      .where('user_id', '=', userId)
      .orderBy('created_at', 'desc')
      .execute(),
  ]);

  return assignments.map((assignment) => {
    const s = submits.filter((s) => s.assignment_id === assignment.id);
    return {
      ...assignment,
      submits: s,
      maxScore: s.reduce((acc, submit) => Math.max(acc, submit.grade), 0),
    };
  });
};

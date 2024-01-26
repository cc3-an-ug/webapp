import { NextRequest, NextResponse } from 'next/server';
import { v4 } from 'uuid';
import { z } from 'zod';

import { db } from '@/server/db';
import { validateToken } from '@/server/token';

const schema = z.object({
  token: z.string().min(1, 'Invalid token.'),
  slug: z.string().min(1, 'Invalid slug.'),
});

export const runtime = 'nodejs';

export const dynamic = 'force-dynamic';

export const validate = 0;

export async function POST(req: NextRequest) {
  const json = await req.json();
  const data = schema.safeParse(json);

  if (!data.success) {
    return NextResponse.json(
      {
        error: 'Bad request',
        status: 400,
      },
      {
        status: 400,
      },
    );
  }

  let userId = '';

  try {
    try {
      userId = await validateToken('AssignmentToken', data.data.token);
    } catch (error) {
      return NextResponse.json(
        {
          error: 'Invalid or expired token',
          status: 401,
        },
        {
          status: 401,
        },
      );
    }

    const assignment = await db
      .selectFrom('Assignment')
      .selectAll()
      .where('slug', '=', data.data.slug)
      .executeTakeFirst();

    if (!assignment) {
      return NextResponse.json(
        {
          error: 'Assignment not found',
          status: 404,
        },
        {
          status: 404,
        },
      );
    }

    const submit = await db
      .selectFrom('Submit')
      .selectAll()
      .where('assignment_id', '=', assignment.id)
      .where('user_id', '=', userId)
      .where('status', '!=', 'DONE')
      .executeTakeFirst();

    if (submit) {
      return NextResponse.json(
        {
          error: 'You already have a pending submission',
          status: 400,
        },
        {
          status: 400,
        },
      );
    }

    const id = v4();

    await db
      .insertInto('Submit')
      .values({
        id,
        assignment_id: assignment.id,
        user_id: userId,
        metadata: JSON.stringify([]) as any,
        stderr: '',
        stdout: '',
        grade: 0,
      })
      .execute();

    return NextResponse.json({
      id: id,
      files: assignment.files,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: 'Unknown error',
        status: 500,
      },
      {
        status: 500,
      },
    );
  }
}

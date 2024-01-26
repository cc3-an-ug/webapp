import { NextRequest, NextResponse } from 'next/server';

import { listAssignments } from '@/server/api/data/assignment/list';
import { getSessionFromReq } from '@/server/session';

export async function GET(req: NextRequest) {
  try {
    const session = await getSessionFromReq(req);

    if (!session) return NextResponse.json([]);

    const assignments = await listAssignments(session.id);

    return NextResponse.json(assignments);
  } catch (error) {
    return NextResponse.json([]);
  }
}

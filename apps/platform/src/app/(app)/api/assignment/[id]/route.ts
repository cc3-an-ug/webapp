import { NextRequest, NextResponse } from 'next/server';

import { getAssignmentByUser } from '@/server/api/data/assignment/get';
import { getSessionFromReq } from '@/server/session';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getSessionFromReq(req);

    if (!session) return NextResponse.json(null);

    const assignment = await getAssignmentByUser(params.id, session.id);

    return NextResponse.json(assignment);
  } catch (error) {
    return NextResponse.json(null);
  }
}

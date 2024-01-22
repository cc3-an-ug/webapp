import * as context from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@/server/auth';

export async function GET(req: NextRequest) {
  const key = await auth.useKey(
    'email',
    'andres.cv@galileo.edu',
    'Guitarhero318$',
  );

  const session = await auth.createSession({
    userId: key.userId,
    attributes: {},
  });

  const authRequest = auth.handleRequest(req.method, context);
  authRequest.setSession(session);

  return NextResponse.json(key);
}

import * as context from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@/server/auth';

export async function GET(req: NextRequest) {
  const authRequest = auth.handleRequest(req.method, context);
  const session = await authRequest.validate();

  return NextResponse.json(session);
}

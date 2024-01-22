import { type NextRequest } from 'next/server';

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { appRouter } from '@/server/api/root';
import { createTRPCContext } from '@/server/api/trpc';

async function createContext(req: NextRequest) {
  return createTRPCContext({
    method: req.method,
    headers: req.headers,
  });
}

function handler(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext(req),
  });
}

export { handler as GET, handler as POST };

import { cookies, headers } from 'next/headers';
import superjson from 'superjson';
import { ZodError } from 'zod';

import { initTRPC, TRPCError } from '@trpc/server';

import { auth } from '@/server/auth';
import { db } from '@/server/db';

export async function createTRPCContext({
  method,
  ...opts
}: {
  method?: string;
  headers: Headers;
}) {
  const authRequest = auth.handleRequest(method ?? 'GET', { headers, cookies });
  const session = await authRequest.validate();

  return {
    db,
    session,
    ...opts,
  };
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

export const privateProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    });
  }

  return next({
    ctx: {
      ...ctx,
      session: {
        ...ctx.session,
        user: {
          ...ctx.session.user,
        },
      },
    },
  });
});

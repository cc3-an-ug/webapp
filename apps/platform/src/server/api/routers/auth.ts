import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const authRouter = createTRPCRouter({
  signIn: publicProcedure
    .input(
      z.object({
        email: z.string().email('Invalid email address.'),
        password: z.string().min(0, 'Password is required.'),
      }),
    )
    .mutation(({ ctx, input }) => {
      // console.log('ctx', ctx);
    }),
});

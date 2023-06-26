import { userRouter } from './router';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;

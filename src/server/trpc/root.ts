import { createTRPCRouter } from '.';
import { userRouter } from './router';

export const appRouter = createTRPCRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;

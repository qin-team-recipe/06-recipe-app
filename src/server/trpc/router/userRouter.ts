import { getUserByUserIdSchema } from '@/schema';
import { createTRPCRouter, protectedProcedure } from '..';
import { getUserByUserId } from '../service';

export const userRouter = createTRPCRouter({
  getUserByUserId: protectedProcedure.input(getUserByUserIdSchema).query(async ({ input }) => {
    const user = await getUserByUserId(input.userId);
    return user;
  }),
});

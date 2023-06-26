import { getUserByEmailSchema } from '@/schema';
import { getUserByEmail } from '../service/userService';
import { createTRPCRouter, protectedProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  getUserByEmail: protectedProcedure.input(getUserByEmailSchema).query(async ({ input }) => {
    const user = await getUserByEmail(input.email);
    return user;
  }),
});

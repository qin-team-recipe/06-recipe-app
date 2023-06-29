import z from 'zod';

export const getUserByUserIdSchema = z.object({
  userId: z.string(),
});

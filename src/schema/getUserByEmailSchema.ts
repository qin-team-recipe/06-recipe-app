import z from 'zod';

export const getUserByEmailSchema = z.object({
  email: z.string().email(),
});

import { z } from 'zod';

export const createUserSchema = z.object({
  name: z
    .string()
    .min(1, { message: '1文字以上で入力してください' })
    .max(255, { message: '255文字以上で入力してください' }),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;

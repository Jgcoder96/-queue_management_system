import z from 'zod';

export const deleteUser = z.object({
  userId: z.string().min(1),
});

import z from 'zod';
import { RegexPassword } from '../utils';

export const updateUser = z.object({
  userId: z.string(),
  lastName: z.string().min(2).max(50).optional(),
  dni: z.number().optional(),
  email: z.string().email().optional(),
  password: z.string().regex(RegexPassword).optional(),
});

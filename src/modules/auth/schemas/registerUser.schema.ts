import z from 'zod';
import { RegexPassword } from '../utils';

export const registerUser = z.object({
  name: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  dni: z.number(),
  email: z.string().email(),
  password: z.string().regex(RegexPassword),
  rol: z.enum(['USER', 'ADMIN', 'MODERATOR']).optional(),
});

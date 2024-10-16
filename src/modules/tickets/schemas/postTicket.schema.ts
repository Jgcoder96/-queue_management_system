import z from 'zod';

export const postTicket = z.object({
  userId: z.string(),
  type: z.string(),
  subject: z.string(),
});

import z from 'zod';

export const putAssignTicket = z.object({
  userId: z.string(),
  ticketId: z.string(),
});

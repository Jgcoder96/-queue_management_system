import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { Ticket } from '../types';

export const updateDoneTicket = async (ticketId: string): Promise<Ticket> => {
  try {
    const prisma = prismaAdapter();
    const queryToUpdateDoneTicket: Ticket = await prisma.procedure.update({
      where: { procedure_id: ticketId },
      data: { finished_at: new Date() },
    });
    return queryToUpdateDoneTicket;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    if (error.code === 'P2025') throw new errors.RecordNotFound();
    throw error;
  }
};

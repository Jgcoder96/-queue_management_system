import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { Ticket } from '../types';

export const findPendingTickets = async (): Promise<Ticket[] | null> => {
  try {
    const prisma = prismaAdapter();
    const queryTofindPendingTickets = await prisma.procedure.findMany({
      where: {
        is_attended: false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    if (queryTofindPendingTickets.length === 0)
      throw new errors.RecordNotFound();
    return queryTofindPendingTickets;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    throw error;
  }
};

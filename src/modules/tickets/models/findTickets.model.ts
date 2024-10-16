import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { Ticket } from '../types';

export const findTickets = async (): Promise<Ticket[] | null> => {
  try {
    const prisma = prismaAdapter();
    const queryTofindTickets = await prisma.procedure.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
    if (queryTofindTickets.length === 0) throw new errors.RecordNotFound();
    return queryTofindTickets;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    throw error;
  }
};

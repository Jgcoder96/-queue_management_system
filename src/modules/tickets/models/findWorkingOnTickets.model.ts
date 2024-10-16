import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { Ticket } from '../types';

export const findWorkingOnTickets = async (): Promise<Ticket[]> => {
  try {
    const prisma = prismaAdapter();
    const queryToWorkingOnTickets = await prisma.procedure.findMany({
      where: {
        is_attended: true,
        finished_at: null,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    if (queryToWorkingOnTickets.length === 0) throw new errors.RecordNotFound();
    return queryToWorkingOnTickets;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    throw error;
  }
};

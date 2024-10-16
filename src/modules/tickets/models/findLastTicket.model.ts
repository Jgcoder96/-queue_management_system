import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { Ticket } from '../types';

export const findLastTicket = async (): Promise<Ticket | null> => {
  try {
    const prisma = prismaAdapter();
    const queryTofindLastTicket = await prisma.procedure.findFirst({
      where: {
        is_attended: false,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    if (!queryTofindLastTicket) throw new errors.RecordNotFound();
    return queryTofindLastTicket;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    throw error;
  }
};

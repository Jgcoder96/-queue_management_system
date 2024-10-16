import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { NewTicket, Ticket } from '../types';

export const insertTicket = async (ticket: NewTicket): Promise<Ticket> => {
  try {
    const prisma = prismaAdapter();
    const QueryToInsertTicket: Ticket = await prisma.procedure.create({
      data: ticket,
    });
    return QueryToInsertTicket;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    if (error.code === 'P2003') throw new errors.UserIdInvalid();
    throw error;
  }
};

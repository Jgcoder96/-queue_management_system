import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { DataPutAssignTicket, Ticket } from '../types';

export const updateAssignTicket = async (
  data: DataPutAssignTicket,
): Promise<Ticket> => {
  try {
    const prisma = prismaAdapter();
    const queryToUpdateAssignTicket: Ticket = await prisma.procedure.update({
      where: { procedure_id: data.ticketId },
      data: { staff_id: data.userId, is_attended: true },
    });
    return queryToUpdateAssignTicket;
  } catch (error) {
    console.log(error);
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    if (error.code === 'P2025') throw new errors.RecordNotFound();
    if (error.code === 'P2003') throw new errors.UserIdInvalid();
    throw error;
  }
};

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { Users } from '../types';

export const findUserByDni = async (dni: number): Promise<Users> => {
  try {
    const prisma = prismaAdapter();
    const queryToFindUser = await prisma.users.findUnique({ where: { dni } });
    if (!queryToFindUser) throw new errors.RecordNotFound();
    return queryToFindUser;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    throw error;
  }
};

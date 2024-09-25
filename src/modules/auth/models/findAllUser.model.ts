import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import type { Users } from '../types';

export const findAllUser = async (): Promise<Users[]> => {
  try {
    const prisma = prismaAdapter();
    const queryToGetUsers: Users[] = await prisma.users.findMany();
    return queryToGetUsers;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    throw error;
  }
};

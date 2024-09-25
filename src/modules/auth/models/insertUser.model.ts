import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { NewUser, Users } from '../types';

export const insertUser = async (user: NewUser): Promise<Users> => {
  try {
    const prisma = prismaAdapter();
    const QueryToInsertUSer: Users = await prisma.users.create({
      data: user,
    });
    return QueryToInsertUSer;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    if (error.code === 'P2002') throw new errors.RecordAlreadyExists();
    throw error;
  }
};

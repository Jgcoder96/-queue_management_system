import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters/prisma.adapter';
import { errors } from '../errors';
import type { Users } from '../types';

export const deleteUser = async (userId: string): Promise<Users> => {
  try {
    const prisma = prismaAdapter();
    const queryToDeleteUser: Users = await prisma.users.delete({
      where: {
        user_id: userId,
      },
    });
    return queryToDeleteUser;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    if (error.code === 'P2025') throw new errors.RecordNotFound();
    throw error;
  }
};

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { Users } from '../types';

export const findUserByEmail = async (emailUser: string): Promise<Users> => {
  try {
    const prisma = prismaAdapter();
    const queryTofindUser = await prisma.users.findUnique({
      where: {
        email: emailUser,
      },
    });
    if (queryTofindUser === null) {
      throw new errors.RecordNotFound();
    }
    return queryTofindUser;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    throw error;
  }
};

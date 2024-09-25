import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { prismaAdapter } from '../../../adapters';
import { errors } from '../errors';
import type { FieldsToUpdateFromUser, Users } from '../types';

export const updateUser = async (
  userId: string,
  fields: FieldsToUpdateFromUser,
): Promise<Users> => {
  try {
    const prisma = prismaAdapter();
    const queryToUpdateUser: Users = await prisma.users.update({
      where: { user_id: userId },
      data: fields,
    });
    return queryToUpdateUser;
  } catch (error) {
    if (!(error instanceof PrismaClientKnownRequestError)) throw error;
    if (error.code === 'P2025') throw new errors.RecordNotFound();
    throw error;
  }
};

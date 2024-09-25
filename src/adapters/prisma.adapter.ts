import { PrismaClient } from '@prisma/client';

export const prismaAdapter = (): PrismaClient => {
  const prisma = new PrismaClient();
  return prisma;
};

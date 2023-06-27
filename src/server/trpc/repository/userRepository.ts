import { prisma } from 'libs/prisma';

export const selectUserByUserId = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

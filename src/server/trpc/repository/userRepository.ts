import { prisma } from 'libs/prisma';

export const selectUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

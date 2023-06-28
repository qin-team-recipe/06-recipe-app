import { selectUserByUserId } from '../repository';

export const getUserByUserId = async (userId: string) => {
  return await selectUserByUserId(userId);
};

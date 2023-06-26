import { selectUserByEmail } from '../repository';

export const getUserByEmail = async (email: string) => {
  return await selectUserByEmail(email);
};

import { User } from "../../models/User";

export const getAllUsersService = async () => {
  return await User.findAll();
};

export const getUserByIdService = async (userId: string) => {
  return await User.findByPk(userId);
};

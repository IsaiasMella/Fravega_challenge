import { userServices } from "../api/endpoints";

export const searchUser = async (user: string) => {
  try {
    const res = await userServices.searchUsers(user);
    return res.data;
  } catch (error) {
    throw error;
  }
};

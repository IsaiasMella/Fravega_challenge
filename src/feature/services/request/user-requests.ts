import { userServices } from "../api/endpoints";

export const searchUserProfile = async (user: string) => {
  try {
    const res = await userServices.userProfile(user);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const searchUserRepositories = async (user: string) => {
  try {
    const res = await userServices.userProfileRepositories(user);
    return res.data;
  } catch (error) {
    throw error;
  }
};

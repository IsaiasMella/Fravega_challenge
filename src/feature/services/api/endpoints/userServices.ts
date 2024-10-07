import { api } from "../api";
import type { UserProfile, UserRepositories, Users, UsersSearch } from "@/types";

export const userServices = {
  getUsersList() {
    return api.get<Users[]>("/users");
  },
  searchUsers(username: string) {
    return api.get<UsersSearch>(`/search/users?q=${username}`);
  },
  userProfile(username: string) {
    return api.get<UserProfile>(`/users/${username}`);
  },
  userProfileRepositories(username: string) {
    return api.get<UserRepositories[]>(`/users/${username}/repos`);
  },
};

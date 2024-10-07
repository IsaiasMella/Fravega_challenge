import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import type { Users } from "@/types";

interface UsersContextProps {
  usersList: Users[] | [];
  setContextUsersList: (users: Users[]) => void;
}

export const UsersContext = createContext<UsersContextProps | undefined>(
  undefined
);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [usersList, setUsersList] = useState<Users[] | []>([]);

  const setContextUsersList = (users: Users[]) => setUsersList(users);

  const value = { usersList, setContextUsersList };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

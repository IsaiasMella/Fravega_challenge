import { UsersContext } from "@/context";
import { useContext } from "react";

export const useUsers = () => {
    const context = useContext(UsersContext);
    if (!context) {
      throw new Error("useUsers debe ser utilizado dentro de UsersProvider");
    }
    return context;
  };
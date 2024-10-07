import { Users } from "@/types";
import { useEffect, useState } from "react";

interface Props {
  user: Users;
}

export const useFavoriteUsers = ({ user }: Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const userIsFavorite = favorites.some((fav: Users) => fav.id === user.id);
      setIsFavorite(userIsFavorite);
    }
  }, [user]);

  const handleFavoriteToggle = () => {
    if (typeof window !== "undefined") {
      let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      let usersFavorites;

      if (isFavorite) {
        usersFavorites = favorites.filter((fav: Users) => fav.id !== user.id);
      } else {
        usersFavorites = [...favorites, user];
      }

      localStorage.setItem("favorites", JSON.stringify(usersFavorites));
      setIsFavorite(!isFavorite);
    }
  };

  return { isFavorite, handleFavoriteToggle };
};

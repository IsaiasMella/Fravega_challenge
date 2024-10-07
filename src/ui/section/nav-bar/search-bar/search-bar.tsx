import { useState } from "react";
import { useRouter } from "next/router";

import { useUsers } from "@/hooks";

import styles from "./Search-Bar.module.css";
import { AxiosError } from "axios";
import { searchUser } from "@/feature/services";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();

  const { setContextUsersList } = useUsers();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handlerSearch = async () => {
    try {
      if (searchValue.trim() === "") setContextUsersList([]);
      const user = await searchUser(searchValue);

      if (user) {
        setContextUsersList(user.items);
        if (router.pathname !== "/") router.push("/");
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err.message);
    }
  };

  return (
    <div className={`${styles.container_search}`}>
      <div className={`${styles.group}`}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`${styles.search_icon}`}
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>

        <input
          id="query"
          type="search"
          name="searchbar"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
          className={`${styles.input}`}
        />
      </div>
      <button onClick={handlerSearch} className={`${styles.button}`}>
        Search
      </button>
    </div>
  );
};

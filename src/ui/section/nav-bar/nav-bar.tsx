import Link from "next/link";

import styles from "./NavBar.module.css";
import { SearchBar } from "./search-bar/search-bar";

export const NavBar = () => {
  return (
    <nav className={`${styles.container}`}>
      <Link href="/" className={`${styles.logo}`}>
        IM
      </Link>
      <SearchBar />
      <Link href="/favorites" className={`${styles.button_fav}`}>
        Fav Profiles
      </Link>
    </nav>
  );
};

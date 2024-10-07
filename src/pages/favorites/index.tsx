import { useEffect, useState } from "react";

import Head from "next/head";

import { Card } from "@/ui/components";

import type { Users } from "@/types";
import styles from "./Favorites.module.css";

export default function FavoritesPage() {
  const [favoriteUsers, setFavoriteUsers] = useState<Users[]>([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]");
    setFavoriteUsers(favorites);
  }, []);

  return (
    <>
      <Head>
        <title>Favorites users</title>
        <meta name="description" content="favorites users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={`${styles.title}`}>Favorites users</h1>
        <section className={`${styles.container}`}>
          {favoriteUsers.length > 0 &&
            favoriteUsers.map((user) => <Card key={user.id} user={user} />)}
        </section>
      </main>
    </>
  );
}

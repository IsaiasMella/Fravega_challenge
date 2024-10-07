import { useEffect } from "react";

import Head from "next/head";

import { userServices } from "@/feature/services";

import { Card } from "@/ui/components";
import { useUsers } from "@/hooks";

import type { Users } from "@/types";
import styles from "@/styles/Home.module.css";
import type { GetServerSideProps } from "next";

interface Props {
  users: Users[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await userServices.getUsersList();
  const users = response.data;

  return {
    props: {
      users,
    },
  };
};

export default function Home({ users }: Props) {
  const { usersList, setContextUsersList } = useUsers();

  useEffect(() => {
    if (usersList.length === 0) setContextUsersList(users);
  }, [setContextUsersList]);

  return (
    <>
      <Head>
        <title>Challenge Fravega</title>
        <meta name="description" content="Challenge for Fravega" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <section className={`${styles.container}`}>
          {usersList.length > 0 &&
            usersList.map((user) => <Card key={user.id} user={user} />)}
        </section>
      </main>
    </>
  );
}

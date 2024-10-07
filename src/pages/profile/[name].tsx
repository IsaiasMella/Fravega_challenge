import { GetServerSideProps } from "next";

import { searchUserProfile, searchUserRepositories } from "@/feature/services";

import type { UserProfile, UserRepositories } from "@/types";

import { HeroProfile } from "@/ui/section";
import { CardRepository } from "@/ui/components";

import styles from "./Profile.module.css";

interface Props {
  user: UserProfile;
  repositories: UserRepositories[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.params!;

  const [user, repositories] = await Promise.all([
    searchUserProfile(name as string),
    searchUserRepositories(name as string),
  ]);

  return {
    props: {
      user,
      repositories,
    },
  };
};

export default function ProfilePage({ user, repositories }: Props) {

  if (!user || !repositories) return <p>No se ha encontrado el usuario</p>;

  return (
    <main className={`${styles.container}`}>
      <HeroProfile user={user} />
      <section className={`${styles.container_repos}`}>
        {repositories.map((repo) => (
          <CardRepository key={repo.id} repo={repo} />
        ))}
      </section>
    </main>
  );
}

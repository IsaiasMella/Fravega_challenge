import { UserProfile } from "@/types";
import Image from "next/image";

import { Star } from "@/ui/components";

import styles from "./Hero.module.css";

interface Props {
  user: UserProfile;
}
export const HeroProfile = ({ user }: Props) => {
  return (
    <section className={`${styles.container_detail}`}>
      <Image src={user.avatar_url} width={300} height={300} alt={user.login} />
      <div className={`${styles.container_detail_info}`}>
        <div className={`${styles.detail_info}`}>
          <div>
            <h2 className={`${styles.title}`}>
              {user?.name ? user.name : user?.login}
            </h2>
            <small>{user?.location}</small>
            <div className={`${styles.bio}`}>
              <p>{user.bio}</p>
            </div>
          </div>
          <div className={`${styles.container_stats}`}>
            <div className={`${styles.stats}`}>
              <small>Repos</small>
              <p>{user.public_repos}</p>
            </div>
            <div className={`${styles.stats}`}>
              <small>Gists</small>
              <p>{user.public_gists}</p>
            </div>
            <div className={`${styles.stats}`}>
              <small>Followres</small>
              <p>{user.followers}</p>
            </div>
            <div className={`${styles.stats}`}>
              <small>Followings</small>
              <p>{user.following}</p>
            </div>
          </div>
        </div>
        <div className={`${styles.container_star}`}>
          <Star user={user} />
        </div>
      </div>
    </section>
  );
};

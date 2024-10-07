import Image from "next/image";
import styles from "./Card.module.css";
import { Users } from "@/types";
import { Star } from "../../common";
import Link from "next/link";

interface Props {
  user: Users;
}
export const Card = ({ user }: Props) => {
  return (
    <Link href={`/profile/${user.login}`}>
      <article className={`${styles.card}`} id="card">
        <div className={`${styles.content}`}>
          <Image
            layout="fill"
            objectFit="cover"
            priority={false}
            alt={user.login}
            src={user.avatar_url}
            className={`${styles.card_image}`}
          />
          <Star user={user} />
          <p className={`${styles.title}`}>{user.login}</p>
        </div>
      </article>
    </Link>
  );
};

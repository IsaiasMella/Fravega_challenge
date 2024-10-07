import { UserRepositories } from "@/types";

import styles from "./CardRepository.module.css";

interface Props {
  repo: UserRepositories;
}
export const CardRepository = ({ repo }: Props) => {
  return (
    <div className={`${styles.repo}`} key={repo.id}>
      <div className={`${styles.repo_container_title}`}>
        <h4 className={`${styles.repo_title}`}>{repo.name}</h4>
        <small>{repo.visibility}</small>
      </div>
      <p>{repo.description}</p>
      <small>{repo.language}</small>
    </div>
  );
};

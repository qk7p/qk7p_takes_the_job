import { FC } from "react";
import styles from "./post.module.scss";
import classNames from "classnames";

export interface IPostProps {
  className?: string;
  source: string;
  content: string;
}

const Post: FC<IPostProps> = ({ className, source, content }) => {
  return (
    <div className={classNames(styles.post, className)}>
      <div className={styles.source}>{source}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Post;

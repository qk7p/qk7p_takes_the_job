import { FC, memo } from "react";
import styles from "./news-item.module.scss";
import classNames from "classnames";

export type NewsItemType = {
  id: number;
  title: string;
  url: string;
};

export interface INewsItemProps {
  className?: string;
  title: string;
  url: string;
}

const NewsItem: FC<INewsItemProps> = ({ className, title, url }) => {
  return (
    <div className={classNames(styles.newsItem, className)}>
      <div className={styles.title}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.content}>
        <img src={url} />
      </div>
    </div>
  );
};

export default NewsItem;

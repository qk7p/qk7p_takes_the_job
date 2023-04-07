import { FC } from "react";
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
      <h3>{title}</h3>
      <img src={url} />
    </div>
  );
};

export default NewsItem;

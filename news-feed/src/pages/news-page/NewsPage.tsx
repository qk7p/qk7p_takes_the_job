import { FC, Profiler } from "react";
import classNames from "classnames";
import styles from "./news-page.module.css";
import News from "@components/news/News";
import Profile from "@components/profile/Profile";
import Sources from "@components/sources/Sources";

const NewsPage: FC = () => {
  return (
    <div className={styles.newsPage}>
      <News />
      <Profile />
      <Sources />
    </div>
  );
};
export default NewsPage;

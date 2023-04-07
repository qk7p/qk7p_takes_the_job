import { FC } from "react";
import styles from "./news-desktop-layout.module.scss";
import News from "@/components/news/News";
import Sources from "@/components/sources/Sources";
import Profile from "@/components/profile/Profile";

const NewsDesktopLayout: FC = () => {
  return (
    <div className={styles.newsDesktopLayout}>
      <News className={styles.news} />
      <Profile className={styles.profile} />
      <Sources className={styles.sources} />
    </div>
  );
};

export default NewsDesktopLayout;

import { FC } from "react";
import styles from "./news-page.module.scss";
import useMediaQuery from "@/hooks/useMediaQuery";
import { MOBILE_SCREEN } from "@/constants/constants";
import NewsMobileLayout from "./news-mobile-layout/NewsMobileLayout";
import Tab, { TabItem } from "@/ui/tab/Tab";
import News from "@/components/news/News";
import Sources from "@/components/sources/Sources";
import ProfilePage from "../profile-page/ProfilePage";
import NewsDesktopLayout from "./news-desktop-layout/NewsDesktopLayout";

const NewsPage: FC = () => {
  const matches = useMediaQuery(MOBILE_SCREEN);

  return (
    <div className={styles.newsPage}>
      {matches ? <NewsMobileLayout /> : <NewsDesktopLayout />}
    </div>
  );
};
export default NewsPage;

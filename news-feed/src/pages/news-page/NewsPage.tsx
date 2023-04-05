import { FC } from "react";
import styles from "./news-page.module.scss";
import useMediaQuery from "@/hooks/useMediaQuery";
import { MOBILE_SCREEN } from "@/constants/constants";
import NewsMobileLayout from "./news-mobile-layout/NewsMobileLayout";
import NewsDesktopLayout from "./news-desktop-layout/NewsDesktopLayout";
import Tab, { TabItem } from "@/ui/tab/Tab";
import News from "@/components/news/News";
import Sources from "@/components/sources/Sources";
import Profile from "@/components/profile/Profile";

const mobileItems: TabItem[] = [
  {
    icon: "News",
    element: <News />,
    isActive: true,
    label: "Новости",
  },
  {
    icon: "Sources",
    element: <Sources />,
    label: "Источники",
  },
  {
    icon: "Profile",
    element: <Profile />,
    label: "Профиль",
  },
];

const NewsPage: FC = () => {
  const matches = useMediaQuery(MOBILE_SCREEN);

  return (
    <div className={styles.newsPage}>
      {matches ? <Tab items={mobileItems} /> : <NewsDesktopLayout />}
    </div>
  );
};
export default NewsPage;

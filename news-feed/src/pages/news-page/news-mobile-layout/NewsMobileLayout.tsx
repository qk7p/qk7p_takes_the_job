import { FC } from "react";
import styles from "./news-mobile-layout.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import Icon from "@/ui/icon/Icon";
import Profile from "@/components/profile/Profile";
import Sources from "@/components/sources/Sources";
import Tab, { TabItem } from "@/ui/tab/Tab";
import News from "@/components/news/News";
import ProfilePage from "@/pages/profile-page/ProfilePage";

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

const NewsMobileLayout: FC = () => {
  return (
    <div className={styles.container}>
      <Tab items={mobileItems} />
    </div>
  );
};

export default NewsMobileLayout;

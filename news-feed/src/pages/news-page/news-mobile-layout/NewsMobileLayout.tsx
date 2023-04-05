import { FC } from "react";
import styles from "./news-mobile-layout.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import Icon from "@/ui/icon/Icon";
import Profile from "@/components/profile/Profile";
import Sources from "@/components/sources/Sources";

const NewsMobileLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}></div>
      <div className={styles.linkContainer}>
        <Link to={"/news"}>
          <Icon type={"News"} />
        </Link>
        <Link to={"/profile"}>
          <Icon type={"Sources"} />
        </Link>
        <Link to={"/sources"}>
          <Icon type={"Profile"} />
        </Link>
      </div>
    </div>
  );
};

export default NewsMobileLayout;

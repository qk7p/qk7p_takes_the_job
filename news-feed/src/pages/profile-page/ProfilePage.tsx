import Profile from "@/components/profile/Profile";
import { FC } from "react";
import styles from "./profile-page.module.scss";
import classNames from "classnames";

export interface IProfilePage {
  className?: string;
}

const ProfilePage: FC<IProfilePage> = ({ className }) => {
  return (
    <div className={classNames(styles.profilePage, className)}>
      <h1 className={styles.title}>Профиль</h1>
      <Profile />
    </div>
  );
};

export default ProfilePage;

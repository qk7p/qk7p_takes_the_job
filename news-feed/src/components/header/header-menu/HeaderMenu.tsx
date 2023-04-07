import { FC } from "react";
import styles from "./header-menu.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

export interface IHeaderMenuProps {
  className?: string;
}

const HeaderMenu: FC<IHeaderMenuProps> = ({ className }) => {
  return (
    <div className={classNames(styles.headerMenu, className)}>
      <Link to={"/profile"} className={styles.link}>
        Профиль
      </Link>
      <Link to={"/sources"} className={styles.link}>
        Источники
      </Link>
    </div>
  );
};

export default HeaderMenu;

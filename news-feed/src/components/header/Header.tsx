import { FC } from "react";
import styles from "./header.module.scss";
import classNames from "classnames";
import Icon from "@/ui/icon/Icon";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectUser } from "@/store/slices/userSlice";
import HeaderMenu from "./header-menu/HeaderMenu";
import { Link } from "react-router-dom";

export interface IHeaderProps {
  className?: string;
}

const Header: FC<IHeaderProps> = ({ className }) => {
  const { isAuth } = useAppSelector(selectUser);

  return (
    <div className={classNames(styles.header, className)}>
      <Link to={"/"}>
        <Icon type={"Logo"} className={styles.logo} />
      </Link>
      {isAuth && <HeaderMenu className={styles.headerMenu} />}
    </div>
  );
};

export default Header;

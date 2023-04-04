import { FC } from "react";
import styles from "./header.module.scss";
import classNames from "classnames";

export interface IHeaderProps {
  className?: string;
}

const Header: FC<IHeaderProps> = ({ className }) => {
  return <div className={classNames(styles.header, className)}></div>;
};

export default Header;

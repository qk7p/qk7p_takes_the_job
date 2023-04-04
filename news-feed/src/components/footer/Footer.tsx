import { FC } from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";

export interface IFooterProps {
  className?: string;
}

const Footer: FC<IFooterProps> = ({ className }) => {
  return <div className={classNames(styles.footer, className)}></div>;
};

export default Footer;

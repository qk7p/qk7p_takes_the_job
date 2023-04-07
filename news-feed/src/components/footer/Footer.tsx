import { FC } from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";

export interface IFooterProps {
  className?: string;
}

const Footer: FC<IFooterProps> = ({ className }) => {
  return (
    <div className={classNames(styles.footer, className)}>
      <span className={styles.name}>qk7p</span>
      <span className={styles.label}>посмотреть резюме:</span>
      <a
        href={
          "https://korolev.hh.ru/resume/fdf5bbb7ff08a222580039ed1f484672336d39"
        }
        className={styles.link}
      >
        hh
      </a>
      <a href={"https://qk7p.ru"} className={styles.link} target={"_blank"}>
        cайт
      </a>
    </div>
  );
};

export default Footer;

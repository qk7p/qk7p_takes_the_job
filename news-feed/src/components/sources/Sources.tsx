import { FC } from "react";
import styles from "./sources.module.scss";
import classNames from "classnames";

export interface ISourcesProps {
  className?: string;
}

const Sources: FC<ISourcesProps> = ({ className }) => {
  return <div className={classNames(styles.sources, className)}></div>;
};

export default Sources;

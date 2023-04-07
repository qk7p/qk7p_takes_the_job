import { FC } from "react";
import styles from "./sources.module.scss";
import classNames from "classnames";

export interface ISourcesProps {
  className?: string;
}

const Sources: FC<ISourcesProps> = ({ className }) => {
  return (
    <div className={classNames(styles.sources, className)}>
      <h1>Источники</h1>
    </div>
  );
};

export default Sources;

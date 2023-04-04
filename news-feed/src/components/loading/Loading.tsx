import { FC } from "react";
import styles from "./loading.module.scss";
import Icon from "@/ui/icon/Icon";
import classNames from "classnames";

export interface ILoadingProps {
  className?: string;
}

const Loading: FC<ILoadingProps> = ({ className }) => {
  return (
    <Icon type="Loading" className={classNames(styles.loading, className)} />
  );
};

export default Loading;

import Icon from "@/ui/icon/Icon";
import { IconType } from "@/ui/icon/IconType";
import classNames from "classnames";
import { FC } from "react";
import styles from "./icon-button.module.scss";

export interface IIconButtonProps {
  className?: string;
  onClick?: () => void;
  type: IconType;
}

const IconButton: FC<IIconButtonProps> = ({ className, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.iconButton, className)}
    >
      <Icon type={type} />
    </button>
  );
};

export default IconButton;

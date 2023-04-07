import { FC } from "react";
import styles from "./icon.module.scss";
import classNames from "classnames";
import { IconType, iconTypes } from "./IconType";

export interface IIconProps {
  className?: string;
  type: IconType;
}

function getIcon(type: IconType): JSX.Element {
  return iconTypes.get(type) as JSX.Element;
}

const Icon: FC<IIconProps> = ({ type, className }) => {
  return (
    <div className={classNames(styles.icon, className)}>
      {getIcon(type)}
    </div>
  );
};

export default Icon;

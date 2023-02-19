import classNames from "classnames";
import { Icon } from "components";
import { IconType } from "components/Icon/IconType";
import React from "react";
import "./ProfileCardItem.scss";

export interface IProfileCardItem {
  className?: string;
  description?: string;
  iconType?: IconType;
  imgSrc?: string;
  subInfo?: string;
}

export const ProfileCardItem: React.FC<IProfileCardItem> = ({
  description,
  iconType,
  imgSrc,
  subInfo,
  className,
}) => {
  return (
    <div className={classNames("ProfileCardItem", className)}>
      {iconType && <Icon type={iconType} />}
      {imgSrc && <img src={imgSrc} alt={imgSrc} />}
      {description && <p>{description}</p>}
      {subInfo && <p id="ProfileCardItemSubInfo">{subInfo}</p>}
    </div>
  );
};

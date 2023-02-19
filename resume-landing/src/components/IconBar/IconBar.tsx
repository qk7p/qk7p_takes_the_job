import classNames from "classnames";
import IconButton from "components/Button/IconButton";
import { IconType } from "components/Icon/IconType";
import React from "react";
import { newGuid } from "utils/guid";
import "./IconBar.scss";

export type IconBarListItem = { icon: IconType; onClick: () => void };

export interface IIconBarProps {
  iconsList: IconBarListItem[];
  className?: string;
}

export const IconBar: React.FC<IIconBarProps> = ({ iconsList, className }) => {
  return (
    <div className={classNames("IconBar", className)}>
      {iconsList &&
        iconsList.map((item) => (
          <div className="IconBarIconContainer" key={newGuid()}>
            <IconButton type={item.icon} onClick={item.onClick} />
          </div>
        ))}
    </div>
  );
};

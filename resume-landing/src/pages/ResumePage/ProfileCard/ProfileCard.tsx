import classNames from "classnames";
import React from "react";
import "./ProfileCard.scss";

export interface IProfileCardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const ProfileCard: React.FC<IProfileCardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={classNames("ProfileCard", className)}>
      {title && (
        <div className="ProfileCardHeader">
          <h3>{title}</h3>
        </div>
      )}
      <div className="ProfileCardContainer">{children}</div>
    </div>
  );
};

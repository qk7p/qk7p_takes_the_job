import classNames from "classnames";
import React from "react";
import "./ProjectItem.scss";

export interface IProjectItemProps {
  className?: string;
  title?: string;
  previewImage?: string;
  link?: string;
  description?: string;
}

export const ProjectItem: React.FC<IProjectItemProps> = ({
  className,
  title,
  previewImage,
  link,
  description,
}) => {
  return (
    <div className={classNames("ProjectItem", className)}>
      <img src={previewImage} alt={title + "_logo"} />
      <h3>{title}</h3>
      <a href={`https://${link}`} target="_blank">
        {link}
      </a>
      <p>{description}</p>
    </div>
  );
};

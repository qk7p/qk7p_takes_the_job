import { FC, useState } from "react";
import classNames from "classnames";
import Avatar from "react-avatar";
import styles from "./user-avatar.module.scss";
import Icon from "../icon/Icon";
import { getFolders } from "@/api/fileApi";
import IconButton from "../button/icon-button/IconButton";

export interface IAvatarProps {
  className?: string;
  name?: string;
  size?: string;
  src?: string;
  round?: boolean;
  onClick?: () => void;
}

const UserAvatar: FC<IAvatarProps> = ({
  className,
  name,
  size,
  round,
  src,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleClick = () => {};

  const handleHoverIn = () => {
    setIsHovered(true);
  };
  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      className={styles.avatarContainer}
    >
      <Avatar
        name={name}
        size={size}
        round={round}
        onClick={handleClick}
        src={src}
        className={classNames(styles.avatar, className)}
      />
      {isHovered && <IconButton type={"Plus"} className={styles.avatarIcon} />}
    </div>
  );
};

export default UserAvatar;

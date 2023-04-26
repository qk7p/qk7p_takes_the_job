import { ChangeEvent, FC, useRef, useState } from "react";
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

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!inputRef) return;
    inputRef.current?.click();
    console.log("click");
  };

  const handleHoverIn = () => {
    setIsHovered(true);
  };
  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const handleAvatarUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!inputRef) return;
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
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
        src={src}
        className={classNames(styles.avatar, className)}
      />
      <input
        type={"file"}
        className={styles.input}
        ref={inputRef}
        accept={"image/*"}
        onChange={handleAvatarUpload}
      />
      {isHovered && (
        <IconButton
          type={"Plus"}
          className={styles.avatarIcon}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default UserAvatar;

import { FC, useEffect, useState } from "react";
import styles from "./profile-item.module.scss";
import classNames from "classnames";
import Icon from "@/ui/icon/Icon";
import { Input } from "@/ui/input/Input";
import Loading from "@/components/loading/Loading";
import useTimeout from "@/hooks/useTimeout";

export interface IProfileItemProps {
  className?: string;
  editable?: boolean;
  label: string;
  value: string;
  isLoading?: boolean;
  onChange?: (
    newValue: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

const ProfileItem: FC<IProfileItemProps> = ({
  className,
  editable = false,
  label,
  value,
  onChange,
}) => {
  const [editing, setEditing] = useState(false);
  const [newValue, setNewValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    if (editable) {
      setEditing(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value);
  };

  const handleInputBlur = () => {
    onChange?.(newValue, setIsLoading);
    setEditing(false);
  };

  return (
    <div
      className={classNames(styles.profileItem, className)}
      onClick={handleEdit}
    >
      <span className={styles.label}>{label + ": "}</span>
      {editing ? (
        <>
          <Input
            onBlur={handleInputBlur}
            className={styles.input}
            onChange={handleInputChange}
          />
          {isLoading && <Loading className={styles.loading} />}
        </>
      ) : (
        <span className={styles.value}>{value}</span>
      )}

      {editable && !editing && <Icon type={"Edit"} className={styles.icon} />}
    </div>
  );
};

export default ProfileItem;

import { FC, useEffect, useState } from "react";
import styles from "./profile.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { clearUser, selectUser, setUser } from "@/store/slices/userSlice";
import Button from "@/ui/button/Button";
import { editUser, getUser, logout } from "@/api/userApi";
import Loading from "../loading/Loading";
import ProfileItem from "./profile-item/ProfileItem";
import classNames from "classnames";
import store from "@/store/store";

export interface IProfileProps {
  className?: string;
}

const Profile: FC<IProfileProps> = ({ className }) => {
  const user = useAppSelector(selectUser);

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const [logoutError, setLogoutError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getUser()
      .then((response) => {
        // Костыль, исправить
        const _user = store.getState().user.user;

        dispatch(
          setUser({
            ..._user,
            name: response.data.data.first_name,
            nickname: response.data.data.nickname,
          })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  const handleLogOut = () => {
    setIsLoading(true);
    setLogoutError("");
    logout()
      .then((response) => {
        if (response.status === 204) {
          dispatch(clearUser());
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (error) {
          setLogoutError(error.response.data.errors[0].message);
        }
      });
  };

  const handleNicknameChange = (
    newValue: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsLoading(true);
    editUser("nickname", newValue)
      .then((response) => {
        dispatch(setUser({ ...user, nickname: response.data.data.nickname }));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleNameChange = (
    newValue: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsLoading(true);
    editUser("first_name", newValue)
      .then((response) => {
        dispatch(setUser({ ...user, name: response.data.data.first_name }));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className={classNames(styles.profile, className)}>
      <ProfileItem label={"Почта"} value={user.email} />
      <ProfileItem
        label={"Ник"}
        value={user.nickname}
        editable={true}
        onChange={handleNicknameChange}
      />
      <ProfileItem
        label={"Имя"}
        value={user.name}
        editable={true}
        onChange={handleNameChange}
      />
      {user.isAuth && (
        <Button className={styles.button} onClick={handleLogOut}>
          {isLoading ? (
            <Loading className={styles.loading} />
          ) : (
            <span>Выйти</span>
          )}
        </Button>
      )}
      {logoutError && <p className={styles.error}>{logoutError}</p>}
    </div>
  );
};

export default Profile;

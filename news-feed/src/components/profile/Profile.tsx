import { FC, useEffect, useState } from "react";
import styles from "./profile.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { clearUser, selectUser } from "@/store/slices/userSlice";
import Button from "@/ui/button/Button";
import { logout } from "@/api/userApi";
import Loading from "../loading/Loading";

const Profile: FC = () => {
  const { email, isAuth, refreshToken } = useAppSelector(selectUser);

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const [logoutError, setLogoutError] = useState("");

  const handleLogOut = async () => {
    setIsLoading(true);
    setLogoutError("");
    logout(refreshToken)
      .then((response) => {
        console.log(response);
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

  return (
    <div className={styles.profile}>
      <div className={styles.content}>
        <p>Почта: {email}</p>
      </div>
      {isAuth && (
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

import { FC, useEffect, useState } from "react";
import styles from "./profile.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { clearUser, selectUser } from "@/store/slices/userSlice";
import Button from "@/ui/button/Button";
import { logout } from "@/api/userApi";

const Profile: FC = () => {
  const { email, isAuth, refreshToken } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const [logoutError, setLogoutError] = useState("");

  const handleLogOut = async () => {
    const response = await logout(refreshToken);
    if (response.status === 204) {
      dispatch(clearUser());
      setLogoutError("");
    } else if (response.status === 400) {
      setLogoutError(response.error);
    }
  };

  return (
    <div className={styles.profile}>
      <p>{email}</p>
      {isAuth && <Button onClick={handleLogOut}>Выйти</Button>}
      {logoutError && <p>{logoutError}</p>}
    </div>
  );
};

export default Profile;

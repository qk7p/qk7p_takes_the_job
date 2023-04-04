import LoginForm from "@/components/login-form/LoginForm";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./login-page.module.scss";

const LoginPage: FC = () => {
  return (
    <div className={styles.loginPage}>
      <h1 className={styles.title}>Авторизация</h1>
      <LoginForm className={styles.loginForm} />
      <Link to={"/registration"} className={styles.link}>
        Создать аккаунт
      </Link>
    </div>
  );
};

export default LoginPage;

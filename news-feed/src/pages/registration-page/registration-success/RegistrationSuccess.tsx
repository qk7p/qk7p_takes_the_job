import useTimeout from "@/hooks/useTimeout";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./registration-success.module.scss";

const RegistrationSuccess: FC = () => {
  const navigate = useNavigate();

  useTimeout(() => navigate("/login"), 3000);

  return (
    <div className={styles.registrationSuccess}>
      <h1 className={styles.title}>Вы успешно зарегистрированы</h1>
      <p className={styles.text}>
        Теперь Вы можете войти, используя данные указанные при регистрации.
      </p>
    </div>
  );
};

export default RegistrationSuccess;

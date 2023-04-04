import RegistrationForm from "@/components/registration-form/RegistrationForm";
import { FC } from "react";
import styles from "./registration-page.module.scss";
import { Link } from "react-router-dom";

const RegistrationPage: FC = () => {
  return (
    <section className={styles.registrationForm}>
      <h1 className={styles.title}>Регистрация</h1>
      <RegistrationForm className={styles.form} />
      <Link to="/login" className={styles.link}>
        Есть аккаунт?
      </Link>
    </section>
  );
};

export default RegistrationPage;

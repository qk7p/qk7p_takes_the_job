import Button from "@ui/button/Button";
import FormField from "@ui/form-field/FormField";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "@/api/userApi";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setUser } from "@/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import styles from "./login-form.module.scss";
import classNames from "classnames";

type LoginInputs = {
  email: string;
  password: string;
};

export interface ILoginFormProps {
  className?: string;
}

const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<LoginInputs>();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [submitError, setSubmitError] = useState("");

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setSubmitError("");
    setIsLoading(true);
    login(data.email, data.password)
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            setUser({
              email: data.email,
              accessToken: response.data.data.access_token,
              refreshToken: response.data.data.refresh_token,
              isAuth: true,
            })
          );
          setIsLoading(false);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          setSubmitError("Нет соединения");
          setIsLoading(false);
        }
        if (error.response.status === 401) {
          setSubmitError(error.response.data.errors[0].message);
          setIsLoading(false);
        }
      });
  };

  return (
    <section className={classNames(styles.loginForm, className)}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormField
          type={"text"}
          register={register}
          name={"email"}
          label={"Почта"}
          error={errors.email?.message}
        />
        <FormField
          type={"password"}
          register={register}
          name={"password"}
          label={"Пароль"}
          error={errors.password?.message}
        />
        <Button className={styles.button} type={"submit"}>
          {isLoading ? (
            <Loading className={styles.loading} />
          ) : (
            <span>Войти</span>
          )}
        </Button>
      </form>
      <div className={styles.errors}>
        {submitError && <span className={styles.error}>{submitError}</span>}
      </div>
    </section>
  );
};

export default LoginForm;

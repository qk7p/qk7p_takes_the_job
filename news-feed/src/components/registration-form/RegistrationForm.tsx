import Button from "@/ui/button/Button";
import FormField from "@/ui/form-field/FormField";
import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { register as registerUser } from "@/api/userApi";
import styles from "./registration-form.module.scss";
import Loading from "../loading/Loading";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

type RegistrationInputs = {
  email: string;
  password: string;
  rePassword: string;
};

export interface IRegistrationFormProps {
  className?: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Формат почты example@example.ru")
    .required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Минимальное кол-во символов - 4"),
  rePassword: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref("password")], "Пароли должны совпадать"),
});

const RegistrationForm: FC<IRegistrationFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationInputs>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit: SubmitHandler<RegistrationInputs> = (data) => {
    setSubmitError("");
    setIsLoading(true);
    registerUser(data.email, data.password)
      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false);
          navigate("/registration/success");
        }
      })
      .catch((error) => {
        setSubmitError(error.response.data.errors[0].message);
        setIsLoading(false);
      });
  };

  return (
    <section className={classNames(className, styles.registrationForm)}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name={"email"}
          type={"text"}
          register={register}
          label={"Почта"}
          error={errors.email?.message}
        />
        <FormField
          name={"password"}
          type={"password"}
          register={register}
          label={"Пароль"}
          error={errors.password?.message}
        />
        <FormField
          name={"rePassword"}
          type={"password"}
          register={register}
          label={"Подтвердите пароль"}
          error={errors.rePassword?.message}
        />
        <Button className={styles.button}>
          {isLoading ? (
            <Loading className={styles.loading} />
          ) : (
            <span>Создать аккаунт</span>
          )}
        </Button>
      </form>
      {submitError && <span className={styles.error}>{submitError}</span>}
    </section>
  );
};

export default RegistrationForm;

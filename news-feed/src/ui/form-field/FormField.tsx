import classNames from "classnames";
import { UseFormRegister, Path, FieldValues } from "react-hook-form";
import { Input } from "../input/Input";
import styles from "./form-field.module.scss";
import { useEffect, useRef, useState } from "react";

export type FormFieldType = "text" | "password";

export interface IFormFieldProps<T extends FieldValues> {
  className?: string;
  error?: string;
  label?: string;
  name: Path<T>;
  type: FormFieldType;
  register: UseFormRegister<T>;
  isFocused?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

export const FormField = <T extends FieldValues>({
  className,
  label,
  name,
  type,
  register,
  error,
  isFocused: isInputFocused,
  autoComplete,
  onBlur,
  onFocus,
}: IFormFieldProps<T>): JSX.Element => {
  const [isFocused, setIsFocused] = useState<boolean | undefined>(
    isInputFocused
  );

  const onBlurCallback = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const onFocusCallback = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!isFocused) {
      setIsFocused(true);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const onAnimationStart = (event: React.AnimationEvent<HTMLInputElement>) => {
    const animated = event.animationName !== "";
    setIsFocused(animated);
  };

  return (
    <div
      className={classNames(
        styles.formField,
        { [styles.focused]: isFocused },
        className
      )}
    >
      <label className={classNames(styles.label)}>{label}</label>
      <Input
        className={classNames(styles.input)}
        {...(register ? register(name) : register)}
        autoComplete={autoComplete}
        error={error}
        name={name}
        type={type}
        onFocus={onFocusCallback}
        onBlur={onBlurCallback}
        onAnimationStart={onAnimationStart}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default FormField;

import {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  useState,
} from "react";
import classNames from "classnames";
import styles from "./input.module.scss";

export interface IInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  autoComplete?: string;
  name?: string;
  type?: string;
  error?: string;
}

export const Input = forwardRef(
  (
    { className, autoComplete, name, type, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        className={classNames(styles.input, className)}
        autoComplete={autoComplete}
        name={name}
        type={type}
        ref={ref}
        {...rest}
      />
    );
  }
);

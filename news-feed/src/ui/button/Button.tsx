import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ children, className, onClick }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.();
  };

  return (
    <button
      className={classNames(styles.button, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

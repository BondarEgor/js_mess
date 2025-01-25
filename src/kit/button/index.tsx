import React from "react";
import { ButtonDesktopProps } from "./types";
import cn from "classnames";
import styles from "./button.module.css";

export const Button: React.FC<ButtonDesktopProps> = ({
  label,
  appearance,
  ...restProps
}) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.secondary]: appearance === "secondary",
      })}
      {...restProps}
    >
      {label}
    </button>
  );
};

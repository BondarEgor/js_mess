import React from "react";
import { ButtonProps } from "./types";
import cn from "classnames";
import styles from "./button.module.css";

export const Button: React.FC<ButtonProps> = ({
  label,
  appearance = "primary",
  size = "m",
  wide,
  ...restProps
}) => {
  return (
    <button
      className={cn(styles.root, styles[appearance], styles[size], {
        [styles._wide]: wide,
      })}
      {...restProps}
    >
      {label}
    </button>
  );
};

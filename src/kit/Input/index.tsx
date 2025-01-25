import React from "react";

import styles from "./input.module.css";
import { IInputProps } from "./types";

export const Input: React.FC<IInputProps> = ({
  placeholder,
  register,
  errorMessage,
}) => {
  return (
    <>
      <input
        id={register?.name}
        {...register}
        placeholder={placeholder}
        className={styles.input}
      />
      {errorMessage && (
        <label htmlFor={register?.name} className="errorText">
          {errorMessage.message}
        </label>
      )}
    </>
  );
};

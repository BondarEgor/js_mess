import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./input.module.css";

interface IInputProps {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  type,
  register,
}) => {
  return (
      <input
        {...register}
        placeholder={placeholder}
        type={type}
        className={classes.input}
      />
  );
};

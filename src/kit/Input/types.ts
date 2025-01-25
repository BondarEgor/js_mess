import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

export type IInputProps = {
  placeholder?: string;
  register?: UseFormRegisterReturn;
  errorMessage?: FieldError;
} & InputHTMLAttributes<HTMLElement>;

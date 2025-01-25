import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import styles from "./form.module.css";
import { createContext, ReactNode } from "react";

interface IFormWrapperProps<T extends FieldValues> {
  children: ReactNode;
  onSubmit: (data: T) => void;
}

interface FormContextType<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const FormContext = createContext<FormContextType<any> | null>(null);

export const FormWrapper = <T extends FieldValues>({
  children,
  onSubmit,
}: IFormWrapperProps<T>) => {
  const form = useForm<T>({ mode: "onSubmit" });

  return (
    <FormContext.Provider value={{ form }}>
      <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

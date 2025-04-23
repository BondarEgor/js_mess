import { FormProvider, useForm } from "react-hook-form";

import { IFormCustom } from "./types";

export const FormCustom: React.FC<IFormCustom> = ({ children }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>{children}</form>
    </FormProvider>
  );
};

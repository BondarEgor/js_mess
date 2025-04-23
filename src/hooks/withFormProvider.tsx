import React, { ComponentType } from "react";
import { FormProvider, useForm } from "react-hook-form";

export function withFormProvider<T>(
  Component: ComponentType<T>
): (props: React.PropsWithChildren<T>) => JSX.Element {
  return (props: React.PropsWithChildren<T>) => {
    const methods = useForm();

    return (
      <FormProvider {...methods}>
        <Component {...props} />
      </FormProvider>
    );
  };
}

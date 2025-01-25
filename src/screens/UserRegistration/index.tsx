// DesktopUserRegistration.tsx
import React from "react";
import styles from "./userRegistration.module.css";
import { useForm } from "react-hook-form";
import { formValidationRules } from "./formValidationRules";
import { Input } from "../../kit/Input";
import { Button } from "../../kit/Button";
import { Link } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

export const UserRegistration: React.FC = () => {
  const { handleSubmit, register } = useForm<IFormInput>({
    mode: "onSubmit",
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Create Your Account</h1>
          <p className={styles.headerSubtitle}>
            Join us and start connecting with people around the world in seconds
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            register={register("email", formValidationRules.email)}
            placeholder="email"
          />
          <Input
            type="password"
            register={register("password", formValidationRules.password)}
            placeholder="password"
          />
          <Link to="/forget-password" className="link">
            Forgot password?
          </Link>
          <Button appearance="primary" type="submit" label="Submit"></Button>
        </form>
        <div className={styles.footer}>
          <span> Already have an acoount?</span>
          <Link className="link" to="/auth">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

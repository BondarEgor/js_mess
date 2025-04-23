// DesktopUserRegistration.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";

import styles from "./styles.module.css";
import { formConfig } from "../../configs/formValidation/config";
import { Input } from "../../kit/Input";
import { Button } from "../../kit/Button";
import { withFormProvider } from "../../hooks/withFormProvider";
import { IFormRegistration } from "./types";
import { Col } from "../../kit/Col";
import { Stack } from "../../kit/Stack";
import { Row } from "../../kit/Row";
import { useTranslation } from "react-i18next";
import { getSelectors } from "./selectors";

const RegisterPageRaw: React.FC = () => {
  const { root } = getSelectors();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<IFormRegistration>();

  const onSubmit = (data: IFormRegistration) => {
    console.log(data);
  };

  return (
    <div data-testid={root} className={styles.container}>
      <div className={styles.card}>
        <header>
          <Col gap="s">
            <h1 className={styles.headerTitle}>{t("registerScreen.title")}</h1>
            <span className={styles.headerSubtitle}>
              {t("registerScreen.subtitle")}
            </span>
          </Col>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack orientation="vertical">
            <Input
              type="text"
              register={register("login", formConfig.login)}
              placeholder={t("registerScreen.placeholder.login")}
              errorMessage={errors.login}
            />
            <Input
              type="text"
              register={register("email", formConfig.email)}
              placeholder={t("registerScreen.placeholder.email")}
              errorMessage={errors.email}
            />
            <Input
              type="password"
              register={register("password", formConfig.password)}
              placeholder={t("registerScreen.placeholder.password")}
              errorMessage={errors.password}
            />
            <Button
              type="submit"
              appearance="black"
              label={t("registerScreen.submitBtn")}
            ></Button>
          </Stack>
        </form>
        <footer>
          <Row gap="s">
            <span>{t("registerScreen.alreadyHaveAcc")}</span>
            <Link className="link" to="/auth">
              {t("registerScreen.loginLink")}
            </Link>
          </Row>
        </footer>
      </div>
    </div>
  );
};

export const RegisterPage = withFormProvider(RegisterPageRaw);

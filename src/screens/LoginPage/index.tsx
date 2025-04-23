import React from "react";
import { useFormContext } from "react-hook-form";

import { withFormProvider } from "../../hooks/withFormProvider";
import styles from "./styles.module.css";
import { Input } from "../../kit/Input";
import { formConfig } from "../../configs/formValidation/config";
import { Button } from "../../kit/Button";
import { IFormAuth } from "./types";
import { Link } from "react-router-dom";
import { Stack } from "../../kit/Stack";
import { Row } from "../../kit/Row";
import { Col } from "../../kit/Col";
import { useTranslation } from "react-i18next";
import { getSelectors } from "./selectors";

const LoginPageRaw: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<IFormAuth>();

  const onSubmit = (data: IFormAuth) => {
    console.log(data);
  };

  const { root } = getSelectors();

  return (
    <div data-testid={root} className={styles.container}>
      <div className={styles.card}>
        <Col gap="s">
          <h1 className={styles.headerTitle}>{t("loginScreen.title")}</h1>
          <p className={styles.headerSubtitle}>{t("loginScreen.subtitle")}</p>
        </Col>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack orientation="vertical">
            <Input
              register={register("login", formConfig.login)}
              type="login"
              placeholder={t("loginScreen.placeholder.login")}
              errorMessage={errors.login}
            />
            <Input
              register={register("password", formConfig.password)}
              type="password"
              placeholder={t("loginScreen.placeholder.password")}
              errorMessage={errors.password}
            />
            <Link to="/recovery" className="link">
              {t("loginScreen.forgotPassword")}
            </Link>
            <Button
              appearance="orange"
              type="submit"
              label={t("loginScreen.submitBtn")}
            />
          </Stack>
        </form>
        <footer>
          <Row gap="s">
            <span>{t("loginScreen.noAccount")}</span>
            <Link className="link" to="/register">
              {t("loginScreen.registerLink")}
            </Link>
          </Row>
        </footer>
      </div>
    </div>
  );
};

export const LoginPage = withFormProvider(LoginPageRaw);

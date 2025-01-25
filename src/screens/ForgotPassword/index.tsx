import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

import { Input } from "../../kit/Input";
import { Button } from "../../kit/Button";
import styles from "./styles.module.css";
import { withFormProvider } from "../../hooks/withFormProvider";
import { useFormContext } from "react-hook-form";
import { formConfig } from "../../configs/formValidation/config";
import { IForgotPassword } from "./types";
import { Col } from "../../kit/Col";
import { Row } from "../../kit/Row";
import { useTranslation } from "react-i18next";
import { getSelectors } from "./selectors";

const ForgetPasswordRaw: React.FC = () => {
  const { root } = getSelectors();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<IForgotPassword>();

  const onSubmit = (data: IForgotPassword) => {
    console.log(data);
  };

  return (
    <div data-testid={root} className={styles.container}>
      <div className={styles.card}>
        <header>
          <Col gap="s">
            <h1 className={styles.headerTitle}>
              {t("forgotPasswordScreen.title")}
            </h1>
            <span className={styles.headerSubtitle}>
              {t("forgotPasswordScreen.subtitle")}
            </span>
          </Col>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Col gap="l">
            <Input
              placeholder={t("forgotPasswordScreen.placeholder.email")}
              type="text"
              register={register("email", formConfig.email)}
              errorMessage={errors.email}
            />
            <Button
              appearance="grey"
              wide
              label={t("forgotPasswordScreen.resetBtn")}
              type="submit"
            />
          </Col>
        </form>
        <footer className={styles.footer}>
          <Link className="link" to="/auth">
            <Row justifyContent="center" alignItems="flex-end" gap="s">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>{t("forgotPasswordScreen.backToLoginLink")}</span>
            </Row>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export const ForgetPassword = withFormProvider(ForgetPasswordRaw);

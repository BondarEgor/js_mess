import React from "react";

import { ForgetPassword } from "../screens/ForgotPassword";
import { getSelectors } from "../screens/ForgotPassword/selectors";
import "@testing-library/jest-dom";
import { renderWithRouter } from "../utils/renderWith/render-with-router";

const { root } = getSelectors();
describe("LoginPage", () => {
  it("Successfull render", () => {
    const { getByTestId } = renderWithRouter(<ForgetPassword />);
    const element = getByTestId(root);

    expect(element).toBeVisible();
  });
});

import React from "react";

import { RegisterPage } from "../screens/RegisterPage";
import { getSelectors } from "../screens/RegisterPage/selectors";
import "@testing-library/jest-dom";
import { renderWithRouter } from "../utils/renderWith/render-with-router";

const { root } = getSelectors();
describe("LoginPage", () => {
  it("Successfull render", () => {
    const { getByTestId } = renderWithRouter(<RegisterPage />);
    const element = getByTestId(root);

    expect(element).toBeVisible();
  });
});

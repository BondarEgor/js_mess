import React from "react";

import { LoginPage } from "../screens/LoginPage";
import { getSelectors } from "../screens/LoginPage/selectors";
import "@testing-library/jest-dom";
import { renderWithRouter } from "../utils/renderWith/render-with-router";

const { root } = getSelectors();
describe("LoginPage", () => {
  it("Successfull render", () => {
    const { getByTestId } = renderWithRouter(<LoginPage />);
    const element = getByTestId(root);

    expect(element).toBeVisible();
  });
});

import React from "react";

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export const renderWithRouter = (comp: React.ReactElement) => {
  return render(<MemoryRouter>{comp}</MemoryRouter>);
};

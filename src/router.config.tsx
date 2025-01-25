import { RouteObject } from "react-router-dom";

import App from "./App";
import { RegisterPage } from "./screens/RegisterPage";
import { LoginPage } from "./screens/LoginPage";
import { ForgetPassword } from "./screens/ForgotPassword";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "auth",
    element: <LoginPage />,
  },
  {
    path: "recovery",
    element: <ForgetPassword />,
  },
  {
    path: "*",
    element: <div>Implement a 404 page</div>,
  },
];

import { RouteObject } from "react-router-dom";
import App from "./App";
import { UserRegistration } from "./screens/UserRegistration";
import { UserAuth } from "./screens/UserAuth";
import { ForgetPassword } from "./screens/ForgetPassword";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
  },
  {
    path: "registration",
    element: <UserRegistration />,
  },
  {
    path: "auth",
    element: <UserAuth />,
  },
  {
    path: "forget-password",
    element: <ForgetPassword />,
  },
];

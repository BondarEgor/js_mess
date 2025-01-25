import { ButtonHTMLAttributes } from "react";

export type ButtonSize = "l" | "m" | "s" | "xs";

export type ButtonAppearance = "primary" | "secondary";

export type ButtonDesktopProps = {
  label?: string;
  wide?: boolean;
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  onClick?: ButtonHTMLAttributes<HTMLElement>["onClick"];
  type?: ButtonHTMLAttributes<HTMLElement>["type"];
};

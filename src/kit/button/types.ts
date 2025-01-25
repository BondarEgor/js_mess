import { ButtonHTMLAttributes } from "react";

export type ButtonSize = "l" | "m" | "s" | "xs";

export type ButtonAppearance = "black" | "grey" | "white" | "orange";

export type ButtonProps = {
  label?: string;
  wide?: boolean;
  size?: ButtonSize;
  appearance?: ButtonAppearance;
} & ButtonHTMLAttributes<HTMLElement>;

import { CSSProperties, ReactNode } from "react";

type TColGap = "s" | "m" | "l" | "xl";

export interface ICol {
  children: ReactNode;
  gap: TColGap;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
}

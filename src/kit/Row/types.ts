import { CSSProperties, ReactNode } from "react";

type TRowGaps = "s" | "m" | "l" | "xl";
export interface IRow {
  children: ReactNode;
  gap: TRowGaps;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
}

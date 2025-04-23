import { ReactNode } from "react";

type Orientation = "horizontal" | "vertical";

export interface IStack {
  orientation: Orientation;
  children: ReactNode;
}

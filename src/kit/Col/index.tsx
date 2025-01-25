import React from "react";
import cn from "classnames";

import style from "./col.module.css";
import { ICol } from "./types";

export const Col: React.FC<ICol> = ({
  children,
  gap = "m",
  alignItems,
  justifyContent,
}) => {
  return (
    <div
      style={{ alignItems, justifyContent }}
      className={cn(style.col, style[`size_${gap}`])}
    >
      {children}
    </div>
  );
};

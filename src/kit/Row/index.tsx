import React from "react";
import cn from "classnames";

import styles from "./row.module.css";
import { IRow } from "./types";

export const Row: React.FC<IRow> = ({
  alignItems,
  justifyContent,
  children,
  gap,
}) => {
  return (
    <div
      style={{ alignItems, justifyContent }}
      className={cn(styles.row, styles[gap])}
    >
      {children}
    </div>
  );
};

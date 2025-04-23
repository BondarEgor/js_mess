import React from "react";

import { IStack } from "./types";
import styles from "./styles.module.css";

export const Stack: React.FC<IStack> = ({ children, orientation }) => {
  return <div className={styles[orientation]}>{children}</div>;
};

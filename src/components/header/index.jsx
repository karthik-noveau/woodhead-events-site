import React from "react";

import { DeskHeader } from "./desktop";
import { MobileHeader } from "./mobile";

import styles from "./style.module.css";

export const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.deskHeader}>
        <DeskHeader />
      </div>
      <div className={styles.mobileHeader}>
        <MobileHeader />
      </div>
    </React.Fragment>
  );
};

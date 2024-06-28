import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";

import Logo from "../../../images/logo/logo.png";

export const DeskHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.leftInfo}>
          <img src={Logo} onClick={() => navigate("/")} />
        </div>
        <div className={styles.centerInfo}>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/story")}>Story</p>
          <p onClick={() => navigate("/portfolio")}>Portfolio</p>
        </div>
        <div className={styles.rightInfo} onClick={() => navigate("/connect")}>
          Connect
        </div>
      </div>
    </div>
  );
};

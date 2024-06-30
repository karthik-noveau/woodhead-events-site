import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";

import Logo from "../../../images/logo/logo.png";

export const DeskHeader = () => {
  const navigate = useNavigate();
  const [navSize, setNavSize] = useState("80px");
  const [navColor, setNavColor] = useState("black");
  const [fontColor, setFontColor] = useState("#e2e2e2");

  const listenScrollEvent = () => {
    if (window.scrollY < 10) {
      setNavColor("black");
      setNavSize("80px");
      setFontColor("#e2e2e2");
    } else {
      setNavColor("black");
      setNavSize("90px");
      setFontColor("#e2e2e2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div
      className={styles.headerWrapper}
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 0.5s",
      }}
    >
      <div className={styles.headerContainer}>
        <div className={styles.leftInfo}>
          <img src={Logo} onClick={() => navigate("/")} />
        </div>
        <div className={styles.centerInfo} style={{ color: fontColor }}>
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import styles from "./style.module.css";
import "./hamburger.override.css";

import Logo from "../image/logo.svg";

export const MobileHeader = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onMenuClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <React.Fragment>
      <div className={styles.headerWrapper}>
        <div className={styles.leftInfo}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div
          className={`${styles.rightInfo} hamburgerMenu ${
            isOpen ? "closeIcon" : "openIcon"
          }`}
        >
          <Hamburger
            direction="right"
            duration={0.7}
            size={29.2}
            toggled={isOpen}
            toggle={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <div
        className={`${styles.popup} ${
          isOpen ? styles.popupShow : styles.popupHide
        }`}
      >
        <div className={styles.menuContainer}>
          <div className={styles.menuItemsContainer}>
            <p
              className={`${styles.menuItem} ${
                isOpen ? "sui-aos-down1" : "sui-aos-up"
              }`}
              onClick={() => onMenuClick("/")}
            >
              Home
            </p>
            <p
              className={`${styles.menuItem} ${
                isOpen ? "sui-aos-down2" : "sui-aos-up"
              }`}
              onClick={() => onMenuClick("/story")}
            >
              Story
            </p>
            <p
              className={`${styles.menuItem} ${
                isOpen ? "sui-aos-down3" : "sui-aos-up"
              }`}
              onClick={() => onMenuClick("/portfolio")}
            >
              Portfolio
            </p>
          </div>
          <div
            className={`${styles.lastItem} ${
              isOpen ? "sui-aos-down4" : "sui-aos-up"
            }`}
            onClick={() => onMenuClick("/connect")}
          >
            Connect
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

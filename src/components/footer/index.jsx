import React from "react";

import { FOOTER_MENU_LINKS, SOCIAL_MEDIA_LINKS } from "./constant";

import styles from "./footer.module.css";

import Logo from "../../images/logo/logo.png";

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.topInfo}>
          <div className={styles.logoContainerInfo}>
            <img src={Logo} alt="footerLogo" className={styles.logo} />
            <div className={styles.companyName}>Woodhead Creative Events</div>
            <div className={styles.slogan}>Brewing Magical Moments</div>
            <div className={styles.mediaIconContainer}>
              {SOCIAL_MEDIA_LINKS.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_MENU_LINKS.map((item, index) => {
            return (
              <div className={styles.menuLinksContainer} key={index}>
                <div className={styles.title}>{item.title}</div>
                {item["links"].map((data, index) => {
                  return (
                    <a
                      className={styles.linkInfo}
                      href={data?.isUrl && data?.url}
                      key={index}
                    >
                      {data.name}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.copyRightsContainer}>
          <div className={styles.leftInfo}>
            All Rights Reserved Revathi Engineering
          </div>
          <div className={styles.rightInfo}>
            <span>Designed by</span>
            <a href="https://skynoveau.in/" target="_blank">
              {" "}
              Skynoveau Technology
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

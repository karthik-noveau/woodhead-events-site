import React from "react";

import { Banner } from "../../components/banner";

import styles from "./styles.module.css";

import PortfolioBannerBg from "./images/portfolio.jpg";

export const Portfolio = () => {
  return (
    <React.Fragment>
      <Banner image={PortfolioBannerBg} name="PORTFOLIO" />
      <div className={styles.sectionWrapper}></div>
    </React.Fragment>
  );
};

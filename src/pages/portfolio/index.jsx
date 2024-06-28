import React from "react";

import { Banner } from "../../components/banner";
import { ScrollToTop } from "../../common/scrollto_top";

import styles from "./styles.module.css";

import PortfolioBannerBg from "../../images/portfolio/portfolio.jpg";

export default function Portfolio() {
  ScrollToTop();
  return (
    <React.Fragment>
      <Banner image={PortfolioBannerBg} name="PORTFOLIO" />
      <div className={styles.sectionWrapper}></div>
    </React.Fragment>
  );
}

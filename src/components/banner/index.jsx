import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { FullScreenLoader } from "../fullscreen_loader/index";

import styles from "./style.module.css";

export const Banner = ({ image, name }) => {
  return (
    <React.Fragment>
      <div className={styles.bannerWrapper}>
        <LazyLoadImage
          alt="logo"
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          src={image}
        />
        <p>{name}</p>
      </div>
    </React.Fragment>
  );
};

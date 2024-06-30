import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./style.module.css";

import Logo from "../../images/logo/logo.png";

export const FullScreenLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.circle}></div>
      <div className={styles.imageContainer}>
        <LazyLoadImage
          src={Logo}
          effect="blur"
          alt="logo"
          className={styles.bannerImage}
        />
        <p>Creating Brewing moments</p>
      </div>
    </div>
  );
};

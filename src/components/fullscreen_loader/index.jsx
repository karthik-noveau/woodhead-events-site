import styles from "./style.module.css";

import Logo from "../../images/logo/logo.png";

export const FullScreenLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.circle}></div>
      <div className={styles.imageContainer}>
        <img src={Logo} />
        <p>Creating Brewing moments</p>
      </div>
    </div>
  );
};

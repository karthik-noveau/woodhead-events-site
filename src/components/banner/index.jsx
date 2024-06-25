import styles from "./style.module.css";

export const Banner = ({ image, name }) => {
  return (
    <div
      style={{ "--pageBannerImage": `url(${image})` }}
      className={styles.bannerWrapper}
    >
      <p>{name}</p>
    </div>
  );
};  

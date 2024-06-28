import React from "react";
import { Button } from "@mui/material";

import { Banner } from "../../components/banner";
import { ScrollToTop } from "../../common/scrollto_top";

import styles from "./style.module.css";

import bannerImage from "../../images/story/about-bg-banner.jpg";

const ADVANTAGES_LIST = [
  "Design",
  "Planning",
  "Communication",
  "Adaptability",
  "Promotion",
  "Projection",
  "Technology",
  "Experience",
];

export default function Story() {
  ScrollToTop();
  return (
    <React.Fragment>
      <Banner image={bannerImage} name="STORY" />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <p className={styles.aboutSectionTitle}>About Woodhead Events</p>
          <p className={styles.aboutSectionInfo}>
            Welcome to Woodhead Events, a Chennai-based event management company
            dedicated to transforming your visions into extraordinary
            experiences. We specialize in curating bespoke events that reflect
            your unique style and leave a lasting impression on your guests.
            <br />
            <span>
              Our team of seasoned marketers, event managers, brand
              storytellers, designers, and client relationship managers bring a
              magical touch to every event. From enchanting weddings to dynamic
              corporate galas, we turn visions into reality with precision and
              flair.
            </span>
          </p>
          <div className={styles.booknowContainer}>
            <p className={styles.contentInfo}>
              We are specialists in planning & executing wedding planning,
              corporate events, & any kind of event!
            </p>
            <Button variant="contained">Book now</Button>
          </div>

          <div className={styles.advantageWrapper}>
            <p className={styles.title}>Our Services</p>
            <div className={styles.advantageContainer}>
              {ADVANTAGES_LIST.map((service) => {
                return <div className={styles.advantageItem}>{service}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

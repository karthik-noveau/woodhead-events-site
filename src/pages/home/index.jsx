import React from "react";
import Button from "@mui/material/Button";

import { ScrollToTop } from "../../common/scrollto_top";

import styles from "./style.module.css";
import "@14islands/r3f-scroll-rig/css";

import HomeBanner1 from "../../images/home/home-bg.jpg";

const OUR_SERVICES_LIST = [
  "Conferences and Seminars",
  "Product launches",
  "Team building activites",
  "Company milesstones",
  "Corporate Retreads",
  "Felicitations",
  "Educational and Training Events",
  "Annual days",
  "Expo",
  "Branding",
  "Promotions",
  "Sponsor dealership",
];

export default function Home() {
  ScrollToTop();
  return (
    <React.Fragment>
      <div className={styles.homeBannerWrapper}>
        <div className={styles.textContainer}>
          <p className={styles.titleInfo}>
            Master Your <span>Events</span>
          </p>
          <p className={styles.subTextInfo}>
            Transforming events into unforgettable experiences, simplifying
            management with our intuitive platform. Join us today !
          </p>
        </div>
      </div>

      <div className={styles.whoWeAreContainer}>
        <p className={`custom-cursor ${styles.whoWeAreSectionTitle}`}>
          Who We Are
        </p>
        <p className={styles.whoWeAreSectionInfo}>
          Woodhead Events, event management specialists from the house of
          Woodhead Creative. We are a dynamic team of seasoned marketers, event
          managers, brand storytellers, designers, and craftsmen creating unique
          event experiences across industries. We're your trusted partner in
          creating seamless, show-stopping events that make milestones.
        </p>
        <div className={styles.booknowContainer}>
          <p className={styles.contentInfo}>
            We are specialists in planning & executing wedding planning,
            corporate events, & any kind of event!
          </p>
          <Button variant="contained">Book now</Button>
        </div>
      </div>

      <div className={styles.ourServicesWrapper}>
        <p className={styles.title}>Our Services</p>
        <div className={styles.ourServicesContainer}>
          <div className={styles.leftInfo}>
            {OUR_SERVICES_LIST.map((service) => {
              return <div className={styles.serviceItem}>{service}</div>;
            })}
          </div>
          <div className={styles.rightInfo}>
            <div className={styles.imgWrapper}>
              <img src={HomeBanner1} />
              <div className={styles.slandingButtonTopPositioned}>
                <div className={styles.slandingButton}>
                  <span>Elevating Corporte Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

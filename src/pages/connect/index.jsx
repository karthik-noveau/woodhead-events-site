import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

import { Banner } from "../../components/banner";
import { FormValidation } from "./form";

import styles from "./styles.module.css";

import ConnectBannerBg from "./images/connect-bg.jpg";
import GoogleMap from "../../components/map";

export const Connect = () => {
  return (
    <React.Fragment>
      <Banner image={ConnectBannerBg} name="CONNECT" />
      <div className={styles.sectionWrapper}>
        <div className={styles.contactWrapper}>
          <div className={styles.titleInfo}>
            <p>Get In Touch</p>
            <p>Thank you for your interest</p>
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.leftInfo}>
              <div className={styles.leftInfoWrapper}>
                <FormValidation />
              </div>
            </div>
            <div className={styles.rightInfo}>
              <div className={styles.rightInfoWrapper}>
                <div className={styles.contactItemContainer}>
                  <div className={styles.iconWrapper}>
                    <FiPhoneCall />
                  </div>
                  <div className={styles.infoWrapper}>
                    <p>Call us</p>
                    <p>1234567788889</p>
                  </div>
                </div>
                <div className={styles.contactItemContainer}>
                  <div className={styles.iconWrapper}>
                    <IoMailOutline />
                  </div>
                  <div className={styles.infoWrapper}>
                    <p>Mail us</p>
                    <p>demo@gmail.com</p>
                  </div>
                </div>
                <div className={styles.contactItemContainer}>
                  <div className={styles.iconWrapper}>
                    <GrLocation />
                  </div>
                  <div className={styles.infoWrapper}>
                    <p>Address</p>
                    <p>206/108 , Broadway, 2nd Floor , Chennai-600 108.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <GoogleMap latitude="17.411177" longitude="78.419293" />
        </div>
      </div>
    </React.Fragment>
  );
};

import React from "react";
import { FunctionComponent } from "react";
import styles from "/room/RequestContainer.module.css";

const RequestContainer = () => {
  return (
    <div className={styles.requestContainer}>
      <div className={styles.requestspeak} />
      <img className={styles.butonnoIcon} alt="" src="ButonNO_icon.svg" />
      <img className={styles.buttonyesIcon} alt="" src="ButtonYES_icon.svg" />
      <img
        className={styles.userright1AvatarIcon}
        alt=""
        src="userRight1_ Avatar.png"
      />
      <div className={styles.jean}>JEAN</div>
      <div className={styles.request}>Request</div>
    </div>
  );
};

export default RequestContainer;

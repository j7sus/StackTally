import React from "react";
import styles from "./DeliveryListContainer.module.css";
import BoxListContainer from "./BoxListContainer";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "short", day: "2-digit" });
};

const DeliveryListContainer = ({ deliveries, toggleDeliveryItems }) => {
  if (!Array.isArray(deliveries) || deliveries.length === 0) {
    return <div>No deliveries available</div>;
  }

  return (
    <div className={styles.frameParent}>
      {/* Head DaliveryListContainer */}
      <div className={styles.frameContainer}>
        <div className={styles.february2025Wrapper}>
          <div className={styles.february2025}>January 2025</div>
        </div>
        <div className={styles.package224dp5f6368Fill0WgParent}>
          <img
            className={styles.package224dp5f6368Fill0WgIcon}
            alt="box icon"
            src="/src/assets/Icons/box icon grey.svg"
          />
          <div className={styles.february2025}>x12</div>
        </div>
      </div>
      {/* end */}

      {deliveries.map((delivery) => (
        <div>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <span>{delivery.userName}</span>
              <span>{formatDate(delivery.date)}</span>
            </div>
          </div>

          <div>
            <BoxListContainer initialBoxes={delivery.boxes || []} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryListContainer;

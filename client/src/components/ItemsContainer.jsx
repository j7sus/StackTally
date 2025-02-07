import React, { useState } from "react";
import styles from "./ItemsContainer.module.css";

import { getItems } from "../services/api";
import { useEffect } from "react";

const ItemsContainer = ({ numberBox, boxId }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedItems = async () => {
      try {
        const fetchedItems = await getItems(boxId);
        setItems(fetchedItems);
      } catch (error) {
        setError("Failed to load items");
      }

      if (boxId) {
        fetchedItems();
      }
    };
  }, [boxId]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.property1frameProperty2p}>
      <div className={styles.frameParent}>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="src/assets/Icons/box faceout.svg"
          />
        </div>
        <div className={styles.bcnWrapper}>
          <div className={styles.bcn}>
            <span className={styles.span}>{numberBox}</span>

            <span className={styles.bcn1}> - BCN</span>
          </div>
        </div>
        <div className={styles.x3}>{items.length}</div>
      </div>

      {items.map((item, index) => (
        <div key={index} className={styles.pr666H6528OvalD95Wrapper}>
          <div className={styles.pr666H6528Oval}>
            {item.barcode} {item.style} {item.description} {item.size}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsContainer;

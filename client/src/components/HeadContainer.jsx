import React, { useState } from "react";
import styles from "./HeadContainer.module.css";

const HeadContainer = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term); // Propaga el término de búsqueda al componente padre
    }
  };

  return (
    <div className={styles.head}>
      <div className={styles.frameParent}>
        <div className={styles.logoContainer}>
          
		  <div className={styles.logos}>
            <img id="logos" src="/src/assets/Icons/StackTally logo.svg" alt="logo" />
            <img src="src/assets/Icons/Stack Tally nameLogo.svg" alt="logo" />
          </div>

          <div className={styles.bar}>
            {/* Search Bar */}
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <input
                  type="text"
                  className={styles.boxNumber}
                  placeholder="Box number / item number"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <img
                  className={styles.icons24search}
                  alt="Search Icon"
                  src="src/assets/Icons/search icon.svg"
                />
              </div>
            </div>

            {/* Scan Button */}
            <div className={styles.qrCodeScanner24dp5f6368Fi}>
              <img
                className={styles.vectorIcon}
                alt="Scan Icon"
                src="src/assets/Icons/scan icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadContainer;
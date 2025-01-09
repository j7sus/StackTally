import React from "react";
import styles from "./FootContainer.module.css"


const FootContainer = ({ onSync, onAdd}) => {
  	return (
		
		// Foot Container
    		<div className={styles.buttonssecondaryParent}>

				{/* Sync Button */}
      			<div className={styles.buttonssecondary} onClick={onSync}>
        				<img className={styles.package224dp5f6368Fill0WgIcon} alt="Sync Icon" src="src/assets/Icons/package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
        				<b className={styles.sync}>SYNC</b>
      			</div>

				{/* Add Delivery Button */}
      			<div className={styles.buttons} onClick={onAdd}>
        				<img className={styles.package224dp5f6368Fill0WgIcon} alt="Add Icon" src="src/assets/Icons/qr_code_scanner_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.svg" />
        				<b className={styles.sync}>ADD</b>
      			</div>

    		</div>);
};

export default FootContainer;
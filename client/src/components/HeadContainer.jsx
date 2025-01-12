import React from "react";
import styles from "./HeadContainer.module.css";
import { Container } from "@mui/material";

// import { AppBar, Toolbar, IconButton, InputBase } from "@mui/material";
// import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
// import SearchIcon from "@mui/icons-material/Search";




const HeadContainer = () => {
    return (
        // Head Container
        <div className={styles.frameParent}>

            {/* Seatch Bar */}
      			<div className={styles.frameWrapper}>
        				<div className={styles.frameGroup}>
          					<div className={styles.boxNumberItemNumberWrapper}>
            						<div className={styles.boxNumber}>Box number / item number</div>
          					</div>
          					<img className={styles.icons24search} alt="" src="src/assets/Icons/search icon.svg" />
        				</div>
      			</div>
                
            {/* Scan Button */}
      			<div className={styles.qrCodeScanner24dp5f6368Fi}>
        				<img className={styles.vectorIcon} alt="" src="src/assets/Icons/scan icon.svg" />
      			</div>
    	</div>
    );
};

export default HeadContainer;
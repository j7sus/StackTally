import React from "react";
import styles from "./BoxContainer.module.css"


const BoxContainer = ({ box }) => {
  	return (
    	<div className={styles.frameParent}>
      		<div className={styles.frameGroup}>
        		<div className={styles.vectorWrapper}>
          			<img className={styles.vectorIcon} alt="Box opened" src="src/assets/Icons/opened box.svg" />
        		</div>
        		<div className={styles.bcnWrapper}>
          			<div className={styles.bcn}>
            			<span className={styles.span}>{box.boxNumber}</span>
            			<span className={styles.bcn1}>{box.store}</span>
          			</div>
        		</div>
        		<div className={styles.x3}>{box.items.length}</div>
      		</div>
                
            { box.item.map((item, index) => (

                <div key={index} className={styles.pr666H6528OvalD95Wrapper}>
                    <div className={styles.pr666H6528Oval}>{item.barcode} {item.style} {item.description} {item.size}</div>
                </div>
            ))}

    	</div>
    );
};

export default BoxContainer;

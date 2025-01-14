import React, { useState } from "react";
import styles from "./BoxContainer.module.css"
import { syncBoxItems } from "../services/api";


const BoxContainer = ({ box }) => {

	const [items, setItems] = useState(box.items || []);
	const [syncing, setSyncing] = useState(false);
	const [error, setError] = useState(null);

	const handleSync = async () => {
		
		setSyncing(true);
		setError(null);

		try {
			const syncedItems = await syncBoxItems(box.id);
			setItems(syncedItems);
			console.log(`Synced 🔄items for box ${box.numberBox}`);
		} catch (error) {
			setError("Failed to sync items");
			
		} finally {
			setSyncing(false);
		}
	};


  	return (
    	<div className={styles.frameParent}>
      		<div className={styles.frameGroup}>
        		<div className={styles.vectorWrapper}>
          			<img className={styles.vectorIcon} alt="Box opened" src="src/assets/Icons/opened box.svg" />
        		</div>
        		<div className={styles.bcnWrapper}>
          			<div className={styles.bcn}>
            			<span className={styles.span}>{box.numberBox}</span>
            			<span className={styles.bcn1}>{box.store}</span>
						
          			</div>
        		</div>
        		<div className={styles.x3}>{box.items ? box.items.length : 0}</div>
				
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

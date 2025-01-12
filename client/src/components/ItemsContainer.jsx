import React from 'react';
import styles from './ItemsContainer.module.css';


const ItemsContainer = ({ items, numberBox }) => {

	return (
    		<div className={styles.property1frameProperty2p}>

      			<div className={styles.frameParent}>
        				<div className={styles.vectorWrapper}>
          					<img className={styles.vectorIcon} alt="" src="src/assets/Icons/box faceout.svg" />
        				</div>
        				<div className={styles.bcnWrapper}>
          					<div className={styles.bcn}>
            						<span className={styles.span}>{numberBox}</span>
									
            						<span className={styles.bcn1}> - BCN</span>
          					</div>
        				</div>
        				<div className={styles.x3}>x3</div>
      			</div>


      			{items.map((item, index) => (
					<div key={index} className={styles.pr666H6528OvalD95Wrapper}>
					<div className={styles.pr666H6528Oval}>
						{item.barcode} {item.style} {item.description} {item.size}
					</div>
					</div>
      			))}
      			
    		</div>);
};

export default ItemsContainer;

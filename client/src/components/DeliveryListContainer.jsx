import React from "react";
import styles from './DeliveryListContainer.module.css';


const DeliveryListContainer = () => {
  	return (
    		<div className={styles.frameParent}>
          
      			<div className={styles.frameGroup}>
        				<div className={styles.package224dp5f6368Fill0WgParent}>
          					<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="src/assets/Icons/package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
          					<div className={styles.div}>22</div>
        				</div>
        				<div className={styles.karina}>Karina</div>
        				<div className={styles.lun17Wrapper}>
          					<div className={styles.div}>Lun 17</div>
        				</div>
      			</div>

      			<div className={styles.instanceParent}>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameGroup}>
            						<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="src/assets/Icons/package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
            						<div className={styles.bcnWrapper}>
              							<div className={styles.bcn}>
                								<span className={styles.span}>{`767589589 `}</span>
                								<span className={styles.bcn1}>(BCN)</span>
              							</div>
            						</div>
            						<div className={styles.x34}>x14</div>
          					</div>
        				</div>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameGroup}>
            						<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="src/assets/Icons/package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
            						<div className={styles.bcnWrapper}>
              							<div className={styles.bcn}>
                								<span className={styles.span}>{`767589589 `}</span>
                								<span className={styles.bcn1}>(BCN)</span>
              							</div>
            						</div>
            						<div className={styles.x34}>x12</div>
          					</div>
        				</div>
        				<div className={styles.frameDiv}>
          					<div className={styles.frameGroup}>
            						<div className={styles.vectorWrapper}>
              							<img className={styles.vectorIcon} alt="" src="src/assets/Icons/Vector Opened Box.svg" />
            						</div>
            						<div className={styles.bcnFrame}>
              							<div className={styles.bcn}>
                								<span className={styles.span}>{`767589589 `}</span>
                								<span className={styles.bcn1}>(BCN)</span>
              							</div>
            						</div>
            						<div className={styles.x34}>x3</div>
          					</div>
          					<div className={styles.pr666H6528OvalD95Wrapper}>
            						<div className={styles.pr666H6528Oval}>80513940530349 PR666 H6528 OVAL D 95</div>
          					</div>
          					<div className={styles.pr666H6528OvalD95Wrapper}>
            						<div className={styles.pr666H6528Oval}>80513940530349 PR666 H6528 OVAL D 85</div>
          					</div>
          					<div className={styles.pr666H6528OvalD95Wrapper}>
            						<div className={styles.pr666H6528Oval}>80513940530349 PR666 H6528 OVAL D 80</div>
          					</div>
        				</div>
      			</div>
    		</div>
        );
};

export default DeliveryListContainer;



// const DeliveryListContainer = ({ deliveries = [] }) => {
//     return (
//       <div className="delivery-list-container">
//         {deliveries.map((delivery) => (
//           <div key={delivery.id} className="delivery-container">
//             <p>{delivery.totalBoxes}</p>
//             <p>{delivery.userName}</p>
//             <p>{delivery.date}</p>  
//           </div>
//         ))}
//       </div>
//     );
// };
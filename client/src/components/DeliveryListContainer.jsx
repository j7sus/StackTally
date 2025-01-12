import React from "react";
import styles from "./DeliveryListContainer.module.css";
import BoxListContainer from "./BoxListContainer";


const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", { weekday: "short", day: "2-digit" });
};

const DeliveryListContainer = ({ deliveries, toggleDeliveryItems }) => {
  return (
	
    <div className={styles.frameParent}>
		
		{/* Head DaliveryListContainer */}
		<div className={styles.frameContainer}>
                            <div className={styles.february2025Wrapper}>
                                    <div className={styles.february2025}>January 2025</div>
                            </div>
                            <div className={styles.package224dp5f6368Fill0WgParent}>
                                    <img className={styles.package224dp5f6368Fill0WgIcon} alt="box icon" src="/src/assets/Icons/box icon grey.svg" />
                                    <div className={styles.february2025}>x12</div>
                            </div>
        </div>
        {/* end */}


      {deliveries.map((delivery) => (
		  <div
        //   key={delivery.id || delivery._id}
        //   className={`${styles.frameWrapper14}`}
        >
		<div className={styles.frameParent}>

          <div className={styles.frameContainer}>
            <span>{delivery.userName}</span>
            <span>{formatDate(delivery.date)}</span>
		  </div>
		</div>
			
		<div >
          <BoxListContainer
		  
            isExpanded={delivery.expanded}
            boxes={delivery.boxes}
          />
		</div>
          
        </div>

		))}
    </div>
  );
};

export default DeliveryListContainer;


// import React from "react";
// import styles from './DeliveryListContainer.module.css';
// import BoxListConatiner from "./BoxListContainer";
// // import { useCollapse } from 'react-collapsed';


// const formatDate = (dateString) => {
// 	const date = new Date(dateString);
// 	return date.toLocaleDateString("en-US", { day: "2-digit", month: "short" }); // Formato: "Mar 18"
//   };

// const DeliveryListContainer = ({ deliveries, toggleDeliveryItems  }) => {
	
// const totalBoxesByMonth = () => {
	
// 	return deliveries.reduce((sum, delivery) => sum + delivery.totalBoxes, 0);

// };
	
	
// // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
	
// 	return (

	
//     	<div className={styles.frameParent}>
// 					{/* Head DaliveryListContainer */}
//         				<div className={styles.frameContainer}>
//           					<div className={styles.february2025Wrapper}>
//             						<div className={styles.february2025}>February 2025</div>
//           					</div>
//           					<div className={styles.package224dp5f6368Fill0WgParent}>
//             						<img className={styles.package224dp5f6368Fill0WgIcon} alt="box icon" src="/src/assets/Icons/box icon grey.svg" />
//             						<div className={styles.february2025}>x{totalBoxesByMonth("February 2025")}</div>
//           					</div>
//         				</div>
// 					{/* end */}


// 				{/* <div>
// 							<div {...getToggleProps()}>


// 							</div>

// 							<div {...getCollapseProps()}>


// 							</div>
// 				</div> */}



//       			<div className={styles.frameGroup}>
						
// 						{/* <BoxListConatiner/> */}
//         				<div>
													
// 							<div className={styles.instanceParent}>

// 							{deliveries.map((delivery) => (

// 									<div key={delivery._id || delivery.id} className={styles.frameWrapper14}><div>
// 									<div className={styles.package224dp5f6368Fill0WgContainer} onClick={() => toggleDeliveryItems(delivery.id)}></div>
// 									<BoxListConatiner/>
// 							</div>

								
// 						</div>				
// 							))}

// 				</div>
						
//           					{/* <div className={styles.frameWrapper1}>
//             						<div className={styles.frameDiv}>
//               							<div className={styles.package224dp5f6368Fill0WgContainer}>
//                 								<img className={styles.package224dp5f6368Fill0WgIcon} alt="box icon" src="/src/assets/Icons/box icon grey.svg" />
//                 								<div className={styles.div}>41</div>
//               							</div>
//               							<div className={styles.karina}>Anthony</div>
//               							<div className={styles.lun17Wrapper}>
//                 								<div className={styles.div}>Mar 18</div>
//               							</div>
//             						</div>
//           					</div>			 */}
//         	</div>
//       	</div>


// 				{/* January */}
//       			<div className={styles.frameGroup}>

//         				<div className={styles.frameContainer}>
//           					<div className={styles.february2025Wrapper}>
//             						<div className={styles.february2025}>January 2025</div>
//           					</div>
//           					<div className={styles.package224dp5f6368Fill0WgParent}>
//             						<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
//             						<div className={styles.february2025}>x121</div>
//           					</div>
//         				</div>

//         				<div className={styles.instanceGroup}>

//           					<div className={styles.frameWrapper5}>
//             						<div className={styles.frameDiv}>

//               							<div className={styles.package224dp5f6368Fill0WgGroup}>
//                 								<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
//                 								<div className={styles.div}>22</div>
//               							</div>

//               							<div className={styles.karina}>Karina</div>
//               							<div className={styles.lun17Wrapper}>
//                 								<div className={styles.div}>Lun 17</div>
//               							</div>

//             						</div>
//           					</div>


//           					<div className={styles.frameWrapper6}>
//             						<div className={styles.frameDiv}>
//               							<div className={styles.package224dp5f6368Fill0WgContainer}>
//                 								<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
//                 								<div className={styles.div}>23</div>
//               							</div>
//               							<div className={styles.karina}>Luis</div>
//               							<div className={styles.lun17Wrapper}>
//                 								<div className={styles.div}>Fri 23</div>
//               							</div>
//             						</div>
//           					</div>
//           					<div className={styles.frameWrapper6}>
//             						<div className={styles.frameDiv}>
//               							<div className={styles.package224dp5f6368Fill0WgContainer}>
//                 								<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
//                 								<div className={styles.div}>23</div>
//               							</div>
//               							<div className={styles.karina}>Karina</div>
//               							<div className={styles.lun17Wrapper}>
//                 								<div className={styles.div}>Fri 23</div>
//               							</div>
//             						</div>
//           					</div>
//           					<div className={styles.frameWrapper6}>
//             						<div className={styles.frameDiv}>
//               							<div className={styles.package224dp5f6368Fill0WgContainer}>
//                 								<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
//                 								<div className={styles.div}>23</div>
//               							</div>
//               							<div className={styles.karina}>Karina</div>
//               							<div className={styles.lun17Wrapper}>
//                 								<div className={styles.div}>Fri 23</div>
//               							</div>
//             						</div>
//           					</div>
//           					<div className={styles.frameWrapper9}>
//             						<div className={styles.frameDiv}>
//               							<div className={styles.package224dp5f6368Fill0WgContainer}>
//                 								<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="package_2_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" />
//                 								<div className={styles.div}>11</div>
//               							</div>
//               							<div className={styles.karina}>Karina</div>
//               							<div className={styles.lun17Wrapper}>
//                 								<div className={styles.div}>Lun 17</div>
//               							</div>
//             						</div>
//           					</div>
//         				</div>
//       			</div>
      			
//     	</div>
// 	);
// };

// export default DeliveryListContainer;












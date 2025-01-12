import React, { useEffect, useState } from "react";
import styles from "./BoxListContainer.module.css"
import ItemsContainer from "./ItemsContainer"



const BoxListConatiner = ({ initialBoxes = [] }) => {
  const [boxes, setBoxes] = useState(initialBoxes);
  const [items, setItems] = useState([]);
  const [totalBoxes, setTotalBoxes] = useState(initialBoxes.length);
  const [boxCounter, setBoxCounter] = useState(initialBoxes.length);
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

    useEffect(() => {
    const fetchItems = async () => {
      try {
        const boxNumbers = boxes.map((box) => box.boxNumber);

        for (const boxNumber of boxNumbers) {
          const response = await fetch(`/api/boxes/${boxNumber}/items`);
          if (!response.ok) {
            throw new Error(`Failed to fetch items for box ${boxNumber}`);
          }
          const data = await response.json();
          setItems((prevItems) => [...prevItems, ...data.items]);
        }
      } catch (error) {
        console.error("Error fetching items:");
      }
    };

    if (boxes && boxes.length > 0) {
      fetchItems();
    }
  }, [boxes]);

  const handleAddBox = () => {
    const newBoxNumber = `702806${ boxCounter + 1}`;
    const newBox = {
      numberBox: newBoxNumber, // Generate unique boxNumber
      items: [],
    };
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
    setTotalBoxes((prevTotal) => prevTotal + 1);
    setBoxCounter((prevCounter) => prevCounter + 1);

  };




  	
  
  return (
    <div className={styles.property1boxes}>

      {/* Head BoxListContainer */}
      <div className={styles.frameParent} onClick={toggleExpand}>
        				<div className={styles.package224dp5f6368Fill0WgParent}>
          					<img className={styles.package224dp5f6368Fill0WgIcon} alt="" src="/src/assets/Icons/box.svg" />
          					<div className={styles.div}>{totalBoxes}</div>

        				</div>
        				<div className={styles.karina}>Karina</div>
        				<button 
                className={styles.qrCodeScanner24dp5f6368Fi}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddBox();
                }}
                >
          					<img className={styles.vectorIcon} alt="" src="/src/assets/Icons/scan box.svg" />
        				</button>
      </div>
      {/* end */}
      {expanded && (

        <div className={styles.instanceParent}>
            {boxes && boxes.length > 0 ? (
              boxes.map((box, index) => (   
                <div key={box.boxNumber} className={styles.frameWrapper}>
                          <div className={styles.boxHeader}></div>

                        <ItemsContainer
                          key={box.numberBox} 
                          numberBox={box.numberBox}
                          // boxNumber={box.boxNumber}
                          items={items}
                          />
                        </div>
                  ))
                ) : (
                  <p>No boxes available</p>
            )}
      </div>
      			
      )}

    </div>
  );
};

export default BoxListConatiner;







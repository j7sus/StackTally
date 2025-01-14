import React, { useEffect, useState } from "react";
import styles from "./BoxListContainer.module.css"
import ItemsContainer from "./ItemsContainer"
import { useCollapse } from "react-collapsed";



const BoxListConatiner = ({ initialBoxes = [] }) => {
  const [boxes, setBoxes] = useState(Array.isArray(initialBoxes) ? initialBoxes : []);
  const [items, setItems] = useState([]);
  const [totalBoxes, setTotalBoxes] = useState(initialBoxes.length);
  const [boxCounter, setBoxCounter] = useState(initialBoxes.length);
  const [expanded, setExpanded] = useState(false);
  
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse;
  
  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (!Array.isArray(boxes) || boxes.length === 0) {
          console.warn("No boxes available to fetch items.");
          return;
        }
  
        const boxNumbers = boxes.map((box) => box.numberBox);
  
        // Procesar solicitudes en paralelo
        const itemRequests = boxNumbers.map((boxNumber) =>
          fetch(`/api/boxes/${boxNumber}/items`).then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to fetch items for box ${boxNumber}`);
            }
            return response.json();
          })
        );
  
        // Obtener todos los datos
        const itemsData = await Promise.all(itemRequests);
  
        // Combinar todos los ítems en un solo arreglo
        const allItems = itemsData.flatMap((data) => data.items || []);
        setItems((prevItems) => [...prevItems, ...allItems]);
  
        console.log("Items fetched successfully:", allItems);
      } catch (error) {
        console.error("Error fetching items:", error.message);
      }
    };
  
    fetchItems();
  }, [boxes]);

  const handleAddBox = () => {
    const newBoxNumber = `702806${ boxCounter + 1}`;
    
    if (boxes.some((box) => box.numberBox === newBoxNumber)) {
      console.error(`Box with number ${newBoxNumber} already exists.`);
      return;
    }

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
        				<div className={styles.karina}></div>
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
                <div key={box.numberBox || index} className={styles.frameWrapper}>
                        
                          <div className={styles.boxHeader}></div>
                          

                        <ItemsContainer
                          key={box.numberBox} 
                          numberBox={box.numberBox}
                          boxId={box.id}
                          // boxNumber={box.boxNumber}
                          // items={items}
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
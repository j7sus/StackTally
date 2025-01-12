import './App.css'
import React, { useEffect, useState} from 'react';
import { getDeliveries } from "./services/api";

// Components
import HeadContainer from "./components/HeadContainer";
import DeliveryListContainer from "./components/DeliveryListContainer";
import FootContainer from "./components/FootContainer"


const App = () => {
  const [deliveries, setDeliveries] = React.useState([]);
  const [boxes, setBoxes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fecthData = async () => {

      try {
        
        const deliveries = await getDeliveries();
        setDeliveries(deliveries);

      } catch (error) {
        setError("Error loading deliveries")
      }
    };
    fecthData();

  }, []);

  const handleSync = async () => {
    try {
      
      const deliveries = await getDeliveries();
      setDeliveries(deliveries);
      console.log("Synced data successfully 👌");
      
    } catch (error) {
      console.log("Error sycing data", error.message);
      setError("Error sycing data");
    }
  };

  // Add Delivery
  const handleAdd = async () => {
    const name = prompt("Please your name: ");
    if (name) {
      const newDelivery = {
        userName: name,
        date: new Date().toISOString(),
        totalBoxes: 0,
      };
  
      try {
        const response = await fetch("http://localhost:4000/api/deliveries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newDelivery),
        });
  
        if (!response.ok) {
          throw new Error("Failed to add delivery");
        }
  
        const { delivery } = await response.json();
        setDeliveries((prevDeliveries) => [...prevDeliveries, delivery]);
        console.log(`Added new delivery 🚛✨ ${name}`);
      } catch (error) {
        console.error("Error adding delivery:", error);
      }
    }
  };
  

  
  if (error) {
    return <div>Error {error}</div>;
  }

  const handleScan = (deliveryId) => {
    setDeliveries((prevDeliveries) =>
      prevDeliveries.map((delivery) => {
        if (delivery.id === deliveryId) {
          const newBox = {
            id: delivery.boxes.length + 1,
            boxNumber: `Box ${delivery.boxes.length + 1}`,
            items: [], // Items pueden ser agregados más tarde
          };
          return {
            ...delivery,
            boxes: [...delivery.boxes, newBox],
            totalBoxes: delivery.totalBoxes + 1, // Actualiza el total de cajas
          };
        }
        return delivery;
      })
    );
  };

  const toggleDeliveryItems = (id) => {
    setDeliveries((prevDeliveries) =>
      deliveries.map((delivery) =>
        delivery.id === id ? { ...delivery, expanded: !delivery.expanded } : delivery
      )
    );
  };

  return (
    <>

      <div className='app-container'>

        <div className='head-container'>
        <HeadContainer/>
        </div>

        <div className='delivery-list-container'>
        
        <DeliveryListContainer 
        deliveries={deliveries}
        handleScan={handleScan}
        toggleDeliveryItems={toggleDeliveryItems}
        
        />
        </div>

        <div className='foot-container'>
        <FootContainer onSync={handleSync} onAdd={handleAdd} />
        </div>

      </div>

    </>
  )
}

export default App

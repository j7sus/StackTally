import "./App.css";
import React, { useEffect, useState } from "react";
import { getDeliveries, syncBoxItems } from "./services/api";

// Components
import HeadContainer from "./components/HeadContainer";
import DeliveryListContainer from "./components/DeliveryListContainer";
import FootContainer from "./components/FootContainer";

const App = () => {
  const [deliveries, setDeliveries] = React.useState([]);
  const [error, setError] = useState(null);
  const [filteredDeliveries, setFilteredDeliveries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deliveries = await getDeliveries();
        setDeliveries(deliveries);
        console.log("Deliveries fetched:", deliveries);
      } catch (error) {
        console.error("Error loading deliveries:", error.message);
        setError("Error loading deliveries.");
      }
    };

    fetchData();
  }, []);

  const handleSync = async () => {
    try {
      if (!Array.isArray(deliveries)) {
        throw new Error("Deliveries data is not VALID");
      }

      const updatedDeliveries = await Promise.all(
        deliveries.map(async (delivery) => {
          const boxes = Array.isArray(delivery.boxes) ? delivery.boxes : [];

          const updatedBoxes = await Promise.all(
            delivery.boxes.map(async (box) => {
              const syncedItems = await syncBoxItems(box.id); //sync
              return { ...box, items: syncedItems };
            })
          );
          // Devuelve delivery actualizado
          return { ...delivery, boxes: updatedBoxes };
        })
      );

      setDeliveries(updatedDeliveries);
      console.log("Data Synced Successfully 👌");
    } catch (error) {
      console.log("Error sycing data :(", error.message);
      setError("Error sycing data :(");
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
    return <div>{error}</div>;
  }

  const handleScan = (deliveryId) => {
    setDeliveries((prevDeliveries) =>
      prevDeliveries.map((delivery) => {
        if (delivery.id === deliveryId) {
          const newBox = {
            id: delivery.boxes.length + 1,
            numberBox: `Box ${delivery.boxes.length + 1}`,
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
        delivery.id === id
          ? { ...delivery, expanded: !delivery.expanded }
          : delivery
      )
    );
  };

  const handleSearch = (term) => {
    if (!term) {
      setFilteredDeliveries(deliveries); // Restablece todas las entregas si no hay término de búsqueda
      return;
    }

    const filtered = deliveries
      .map((delivery) => {
        const filteredBoxes = delivery.boxes.filter(
          (box) =>
            box.numberBox.includes(term) || // Busca por número de caja
            box.items.some((item) => item.barcode.includes(term)) // Busca por ítem
        );

        return filteredBoxes.length > 0
          ? { ...delivery, boxes: filteredBoxes }
          : null;
      })
      .filter(Boolean); // Elimina las entregas sin cajas coincidentes

    setFilteredDeliveries(filtered);
  };

  return (
    <>
      <div className="app-container">
        <div className="head-container">
          <HeadContainer onSearch={handleSearch} />
        </div>

        <div className="delivery-list-container">
          <DeliveryListContainer
            deliveries={deliveries}
            handleScan={handleScan}
            toggleDeliveryItems={toggleDeliveryItems}
          />
        </div>

        <div className="foot-container">
          <FootContainer onSync={handleSync} onAdd={handleAdd} />
        </div>
      </div>
    </>
  );
};

export default App;

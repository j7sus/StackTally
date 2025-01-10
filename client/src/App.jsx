import { useEffect, useState } from 'react'
import './App.css'
import { getDeliveries } from "./services/api";

// Components
import HeadContainer from "./components/HeadContainer";
import DeliveryListContainer from "./components/DeliveryListContainer";
import FootContainer from "./components/FootContainer"


const App = () => {
  const [deliveries, setDeliveries] = useState([]);
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

  const handleAdd = () => {
    const name = prompt("Please your name: ")
    if (name) {
      const newDelivery = {
        id: deliveries.length + 1,
        userName: name,
        date: new Date().toLocaleDateString(),
        totalBoxes: 0,
      };
      setDeliveries((prev) => [...prev, newDelivery]);
    }
    console.log(`Adding new delivery 🚛✨ ${name}`)
  };
  
  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <>

      <div className='app-container'>
        <HeadContainer/>
        <DeliveryListContainer deliveries={deliveries} />
        <FootContainer onSync={handleSync} onAdd={handleAdd} />
      </div>

    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import { getMockDeliveries, getMockBoxes } from "./services/api";
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
        const mockBoxes = await getMockBoxes();
        const mockDeliveries = await getMockDeliveries();
        setDeliveries(mockDeliveries);
        setBoxes(mockBoxes); 
      } catch (error) {
        setError("Error loading data")
      }

    };
    fecthData();
  }, []);

  const handleSync = () => {
    console.log("Syncing data...")
  };

  const handleAdd = () => {
    console.log("Adding new delivery...")
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

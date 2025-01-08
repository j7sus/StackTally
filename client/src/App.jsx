import { useEffect, useState } from 'react'
import './App.css'
import { getMockDeliveries, getMockBoxes } from "./services/api";

function App() {
  const [deliveries, setDeliveries] = useState([]);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const mockBoxes = await getMockBoxes();
      const mockDeliveries = await getMockDeliveries();
      setDeliveries(mockDeliveries);
      setBoxes(mockBoxes);
    };
    fecthData();
  }, []);



  return (
    <>

      <div className='app-container'>
        <div>HeadContainer</div>
        <div>DeliveryListContainer</div>
        <div>BoxesListContainer</div>
      </div>

    </>
  )
}

export default App

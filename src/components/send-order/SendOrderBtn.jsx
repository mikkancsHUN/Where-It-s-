import { useNavigate } from 'react-router-dom';
import './send-order-btn.css';
import { useEffect, useState } from 'react'; // useEffect és useState importálása
import { v4 as uuidv4 } from 'uuid'; // UUID generálásához

function SendOrderBtn() {
  const navigate = useNavigate();
  const [randomID, setRandomID] = useState(''); // randomID állapot létrehozása

  useEffect(() => {
    // Random 5 karakterből álló UUID generálása, amikor a komponens mountolódik
    const generatedID = generateRandomID();
    setRandomID(generatedID);
  }, []); // Üres függvénylista, hogy csak a mount során fusson le

  const handleClick = () => {
    // OrderData lekérése a localStorage-ból
    const orderData = JSON.parse(localStorage.getItem('orderData')) || [];

    // RandomID hozzáadása minden eseményhez
    const orderWithID = orderData.map(event => ({ ...event, randomID: randomID }));

    // Új localstorage mentés tickets névvel
    localStorage.setItem('tickets', JSON.stringify(orderWithID));

    // OrderData törlése a localStorage-ból
    localStorage.removeItem('orderData');

    // Navigálás a tickets oldalra
    navigate('/tickets');
  };

  const generateRandomID = () => {
    return uuidv4().substr(0, 5); // Az UUID első 5 karakterének kivágása
  };

  return (
    <button className='send-order__btn' onClick={handleClick}>Skicka order</button>
  );
}

export default SendOrderBtn;

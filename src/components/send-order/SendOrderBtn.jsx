import { useNavigate } from 'react-router-dom';
import './send-order-btn.css';

function SendOrderBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    const orderData = JSON.parse(localStorage.getItem('orderData')) || [];
    
    const updatedOrders = orderData.flatMap((order) => {
      const section = generateSectionLetter();
      return Array.from({ length: order.ticketCount }, (_, index) => ({
        ...order,
        section,
        seatNumber: index + 1,
        id: generateUniqueId(),  // Minden jegyhez külön egyedi azonosító generálása
      }));
    });

    // Új localStorage mentés tickets névvel
    localStorage.setItem('tickets', JSON.stringify(updatedOrders));

    // OrderData törlése a localStorage-ból
    localStorage.removeItem('orderData');

    // Navigálás a tickets oldalra
    navigate('/tickets');
  };

  // Egyedi azonosító generálása
  function generateUniqueId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 5;
    let randomId = '';
    for (let i = 0; i < idLength; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
  }

  // Szekció betű generálása
  function generateSectionLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return (
    <button className='send-order__btn' onClick={handleClick}>Skicka order</button>
  );
}

export default SendOrderBtn;
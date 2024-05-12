import './add-to-cart-counter.css';
import { useContext } from 'react';
import { EventContext } from '../../context/EventContext';

function AddToCartCounter() {
  const { selectedEvent, ticketCount, setTicketCount } = useContext(EventContext);

  if (!selectedEvent) {
    return null;
  }

  const pricePerTicket = selectedEvent.price;
  const totalCost = ticketCount * pricePerTicket;

  const increaseTickets = () => {
    const newTicketCount = ticketCount + 1;
    setTicketCount(newTicketCount);
    updateLocalStorage(newTicketCount, pricePerTicket);
  };

  const decreaseTickets = () => {
    if (ticketCount > 1) {
      const newTicketCount = ticketCount - 1;
      setTicketCount(newTicketCount);
      updateLocalStorage(newTicketCount, pricePerTicket);
    }
  };

  const updateLocalStorage = (newTicketCount, pricePerTicket) => {
    const selectedEvents = JSON.parse(localStorage.getItem('selectedEvents')) || [];
    const updatedselectedEvents = selectedEvents.map((item) => {
      if (item.id === selectedEvent.id) {
        return { ...item, ticketCount: newTicketCount, price: pricePerTicket * newTicketCount };
      }
      return item;
    });
    localStorage.setItem('selectedEvents', JSON.stringify(updatedselectedEvents));
  };
  

  return (
    <section className='add-to-cart__counter'>
      <span className='add-to-cart__price'>{totalCost} sek</span>
      <div className='add-to-cart__quantity-box'>
        <button onClick={decreaseTickets} className='add-to-cart__quantity-btn'>-</button>
        <span className='add-to-cart__quantity'>{ticketCount}</span>
        <button onClick={increaseTickets} className='add-to-cart__quantity-btn'>+</button>
      </div>
    </section>
  );
}

export default AddToCartCounter;

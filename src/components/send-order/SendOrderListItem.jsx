import { useState } from 'react';
import './send-order-list-item.css'

function SendOrderListItem({ order }) {
  const [ticketCount, setTicketCount] = useState(order.ticketCount);

  const decreaseTickets = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
      updateLocalStorage(ticketCount - 1);
    }
  };

  const increaseTickets = () => {
    setTicketCount(ticketCount + 1);
    updateLocalStorage(ticketCount + 1);
  };

  const updateLocalStorage = (newTicketCount) => {
    const updatedOrder = { ...order, ticketCount: newTicketCount };
    const orderDataList = JSON.parse(localStorage.getItem('orderData')) || [];
    const updatedOrderDataList = orderDataList.map((item) => {
      if (item.eventName === order.eventName && item.eventTime === order.eventTime) {
        return updatedOrder;
      }
      return item;
    });
    localStorage.setItem('orderData', JSON.stringify(updatedOrderDataList));
  };

  return (
    <li className="send-order__list-item">
      <article className='send-order__details'>
        <h2 className='send-order__heading'>{order.eventName}</h2>
        <p className='send-order__time'>{order.eventTime}</p>
      </article>
      <div className="send-order__quantity-box">
        <button onClick={decreaseTickets} className='send-order__quantity-btn'>-</button>
        <span className='send-order__quantity'>{ticketCount}</span>
        <button onClick={increaseTickets} className='send-order__quantity-btn'>+</button>
      </div>
    </li>
  );
}

export default SendOrderListItem;

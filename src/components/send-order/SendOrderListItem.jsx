import  { useState } from 'react';
import './send-order-list-item.css';

function SendOrderListItem({ orderData, index }) {
  const [updatedOrderData, setUpdatedOrderData] = useState(orderData);

  const increaseQuantity = () => {
    const newTicketCount = updatedOrderData.ticketCount + 1;
    setUpdatedOrderData({ ...updatedOrderData, ticketCount: newTicketCount });
    updateLocalStorage(newTicketCount);
  };

  const decreaseQuantity = () => {
    if (updatedOrderData.ticketCount > 1) {
      const newTicketCount = updatedOrderData.ticketCount - 1;
      setUpdatedOrderData({ ...updatedOrderData, ticketCount: newTicketCount });
      updateLocalStorage(newTicketCount);
    }
  };

  const updateLocalStorage = (newTicketCount) => {
    const orderDataList = JSON.parse(localStorage.getItem('orderData')) || [];
    const updatedOrderDataList = orderDataList.map((item) => {
      if (item.eventName === updatedOrderData.eventName) {
        return { ...item, ticketCount: newTicketCount };
      }
      return item;
    });
    localStorage.setItem('orderData', JSON.stringify(updatedOrderDataList));
  };

  return (
    <li className="send-order__list-item" key={index}>
      <article className='send-order__details'>
        <h2 className='send-order__heading'>{updatedOrderData.eventName}</h2>
        <p className='send-order__time'>{updatedOrderData.eventTime}</p>
      </article>
      <div className="send-order__quantity-box">
        <button className='send-order__quantity-btn' onClick={decreaseQuantity}>-</button>
        <span className='send-order__quantity'>{updatedOrderData.ticketCount}</span>
        <button className='send-order__quantity-btn' onClick={increaseQuantity}>+</button>
      </div>
    </li>
  );
}

export default SendOrderListItem;

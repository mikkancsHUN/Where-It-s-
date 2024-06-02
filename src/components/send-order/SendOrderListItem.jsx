import './send-order-list-item.css';
import useOrderStore from '../../zustandStore';

function SendOrderListItem({ orderData, index }) {
  const { updateOrder } = useOrderStore((state) => ({
    updateOrder: state.updateOrder,
  }));

  const increaseQuantity = () => {
    const newTicketCount = orderData.ticketCount + 1;
    const updatedOrderData = { ...orderData, ticketCount: newTicketCount };
    updateOrder(updatedOrderData);
  };

  const decreaseQuantity = () => {
    if (orderData.ticketCount > 1) {
      const newTicketCount = orderData.ticketCount - 1;
      const updatedOrderData = { ...orderData, ticketCount: newTicketCount };
      updateOrder(updatedOrderData);
    }
  };

  return (
    <li className="send-order__list-item" key={index}>
      <article className='send-order__details'>
        <h2 className='send-order__heading'>{orderData.eventName}</h2>
        <p className='send-order__time'>{orderData.eventTime}</p>
      </article>
      <div className="send-order__quantity-box">
        <button className='send-order__quantity-btn' onClick={decreaseQuantity}>-</button>
        <span className='send-order__quantity'>{orderData.ticketCount}</span>
        <button className='send-order__quantity-btn' onClick={increaseQuantity}>+</button>
      </div>
    </li>
  );
}

export default SendOrderListItem;
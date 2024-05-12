
import SendOrderListItem from './SendOrderListItem';
import './send-order-list.css'
function SendOrderList() {
  const orderDataList = JSON.parse(localStorage.getItem('orderData')) || [];

  return (
    <ul className="send-order__list">
      {orderDataList.map((orderData, index) => (
        <SendOrderListItem order={orderData} key={index} />
      ))}
    </ul>
  );
}

export default SendOrderList;

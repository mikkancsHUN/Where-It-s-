
import SendOrderBtn from '../../components/send-order/SendOrderBtn';
import SendOrderListItem from '../../components/send-order/SendOrderListItem';
import useOrderStore from '../../zustandStore';
import './send-order-page.css';
import { useEffect } from 'react';


function SendOrderPage() {
  const { orderDataList, setOrderDataList } = useOrderStore((state) => ({
    orderDataList: state.orderDataList,
    setOrderDataList: state.setOrderDataList,
  }));

  useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem('orderData')) || [];
    setOrderDataList(storedOrderData);
  }, [setOrderDataList]);

  const totalAmount = orderDataList.reduce((total, order) => total + order.price * order.ticketCount, 0);

  return (
    <section className='send-order__page'>
      <h1>Order</h1>
      <ul>
        {orderDataList.map((orderData, index) => (
          <SendOrderListItem key={index} orderData={orderData} index={index} />
        ))}
      </ul>
      <article className='send-order__total'>
        <p>Totalt värde på order</p>
        <span className='send-order__total-price'>{totalAmount} sek</span>
        <SendOrderBtn />
      </article>
    </section>
  );
}

export default SendOrderPage;
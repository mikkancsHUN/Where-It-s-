
import SendOrderBtn from '../../components/send-order/SendOrderBtn';
import SendOrderList from '../../components/send-order/SendOrderList';
import './send-order-page.css';

function SendOrderPage() {
  const orders = []; // feltételezzük, hogy az összes rendelés adatait tartalmazza

  // Események összes árának kiszámítása
  const totalAmount = orders.reduce((total, order) => total + order.price * order.quantity, 0);

  return (
    <section className='send-order__page'>
      <h1>Order</h1>
      <SendOrderList orders={orders} />
      <article className='send-order__total'>
        <p>Totalt värde på order</p>
        <span className='send-order__total-price'>{totalAmount} sek</span>
        <SendOrderBtn />
      </article>
    </section>
  );
}

export default SendOrderPage;

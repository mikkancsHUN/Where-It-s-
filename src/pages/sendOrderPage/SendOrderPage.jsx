import SendOrderBtn from '../../components/send-order/SendOrderBtn'
import SendOrderList from '../../components/send-order/SendOrderList'
import './send-order-page.css'
function SendOrderPage() {
  return (
    <section className='send-order__page'>
      <h1>Order</h1>
        <SendOrderList />
        <article className='send-order__total'>
          <p>Totalt värde på order</p>
          <span className='send-order__total-price'>1310 sek</span>
          <SendOrderBtn />
        </article>
    </section>    
  )
}

export default SendOrderPage
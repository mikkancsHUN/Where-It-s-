
import AddToCartBtn from '../../components/add-to-cart/AddToCartBtn'
import AddToCartCounter from '../../components/add-to-cart/AddToCartCounter'
import AddToCartDetails from '../../components/add-to-cart/AddToCartDetails'
import './add-to-cart-page.css'
function AddToCartPage() {
  return (
    <section className='add-to-cart__page'>
      <article className='add-to-cart__infos'>
        <h1>Event</h1>
        <p className='add-to-cart__info'>You are about to score some tickets to</p>
        <AddToCartDetails />  
      </article>
      <AddToCartCounter />
      <AddToCartBtn />
    </section>
    
  )
}

export default AddToCartPage
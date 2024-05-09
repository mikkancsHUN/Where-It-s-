import './add-to-cart-counter.css'
function AddToCartCounter() {
  return (
    <section className='add-to-cart__counter'>
        <span className='add-to-cart__price'>1050 sek</span>
        <div className='add-to-cart__pice-box'>
            <button className='add-to-cart__pice-btn'>-</button>
            <span className='add-to-cart__piece'>3</span>
            <button className='add-to-cart__pice-btn'>+</button>
        </div>
    </section>
  )
}

export default AddToCartCounter
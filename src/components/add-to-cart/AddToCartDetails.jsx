import './add-to-cart-details.css'
import { useContext } from 'react'
import { EventContext } from '../../context/EventContext'

function AddToCartDetails() {
  const { selectedEvent } = useContext(EventContext); // Kiválasztott esemény elérése

  if (!selectedEvent) {
    return <p className='warning'>No event selected</p>; // Ha nincs kiválasztva esemény
  }

  return (
    <article className='add-to-cart__details'>
      <h2 className='add-to-cart__heading'>{selectedEvent.name}</h2>
      <p className='add-to-cart__time'>{selectedEvent.when.date} kl {selectedEvent.when.from} - {selectedEvent.when.to}</p>
      <p className='add-to-cart__place'>@ {selectedEvent.where}</p>
    </article>
  )
}

export default AddToCartDetails
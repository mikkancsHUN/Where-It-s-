import './send-order-btn.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function generateTicketID() {
  // Generálunk egy UUID-t
  const uuid = uuidv4();
  // Megszerezzük az első 4 karaktert szakasz azonosítónak
  const section = uuid.substring(0, 4).toUpperCase();
  // Az utolsó 4 karaktert szék azonosítónak
  const seat = uuid.substring(uuid.length - 4).toUpperCase(); // Csak betűk és számok
  return `${section}-${seat}`; // Kombinált azonosító
}

function SendOrderBtn() {


  return (
    <button className='send-order__btn'>Skicka order</button>
  )
}

export default SendOrderBtn
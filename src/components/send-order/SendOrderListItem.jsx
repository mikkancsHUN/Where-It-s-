
function SendOrderListItem() {
  return (
    <li className="send-order__list-item">
      <article className='send-order__details'>
        <h2 className='send-order__heading'>Lasse-Stefanz</h2>
        <p className='send-order__time'>21 mars kl 19.00 - 21.00</p>
      </article>
      <div className="send-order__pice-box">
        <button className='send-order__pice-btn'>-</button>
        <span className='send-order__piece'>3</span>
        <button className='send-order__pice-btn'>+</button>
      </div>
    </li>
  )
}

export default SendOrderListItem
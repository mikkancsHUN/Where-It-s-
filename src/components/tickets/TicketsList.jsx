import './tickets-list.css';

function TicketsList() {
  // Lekérjük az elmentett rendeléseket a localStorage-ból
  const orderDataList = JSON.parse(localStorage.getItem('orderData')) || [];

  return (
    <ul className="tickets__list">
      {orderDataList.map((order) => (
        <li key={order.id} className="tickets__item">
          <header className="tickets__item-header">
            <span className="tickets__item-sub-heading">What</span>
            <h2 className="tickets__item-heading">{order.name}</h2>
          </header>
          <main className="tickets__item-main">
            <article className="tickets__item-where">
              <span className="tickets__item-sub-heading">Where</span>
              <h3 className="tickets__item-where-place">{order.where}</h3>
              <p className="tickets__item-where-building">{order.whereBuilding}</p>
            </article>
            <section className="tickets__item-date">
              <div className="tickets__item-date-box">
                <span className="tickets__item-sub-heading">When</span>
                <p className="tickets__item-date-time">{order.when.date}</p>
              </div>
              <div className="tickets__item-date-box">
                <span className="tickets__item-sub-heading">From</span>
                <p className="tickets__item-date-time">{order.when.from}</p>
              </div>
              <div className="tickets__item-date-box">
                <span className="tickets__item-sub-heading">To</span>
                <p className="tickets__item-date-time">{order.when.to}</p>
              </div>
            </section>
            <section className="tickets__item-info">
              <span className="tickets__item-sub-heading">Info</span>
              <p className="tickets__item-info-seat">{order.info}</p>
            </section>
          </main>
          <footer className="tickets__item-footer">
            <p className="tickets__item-order-barcode">{order.id}</p>
            <p className="tickets__item-order-code">{order.id}</p>
          </footer>
        </li>
      ))}
    </ul>
  );
}

export default TicketsList;

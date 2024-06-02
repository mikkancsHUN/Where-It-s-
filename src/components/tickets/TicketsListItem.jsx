

function TicketsListItem({ ticket }) {
  const shortenMonthName = (fullMonthName) => {
    return fullMonthName.substring(0, 6); // Levágjuk az első hat karaktert
  };

  return (
    <li className="tickets__item">
      <header className="tickets__item-header">
        <span className="tickets__item-sub-heading">What</span>
        <h2 className="tickets__item-heading">{ticket.eventName}</h2>
      </header>
      <main className="tickets__item-main">
        <article className="tickets__item-where">
          <span className="tickets__item-sub-heading">Where</span>
          <h3 className="tickets__item-where-place">{ticket.where}</h3>
          <p className="tickets__item-where-building"></p>
        </article>
        <section className="tickets__item-date">
          <div className="tickets__item-date-box">
            <span className="tickets__item-sub-heading">When</span>
            <p className="tickets__item-date-time">{shortenMonthName(ticket.when.date)}</p>
          </div>
          <div className="tickets__item-date-box">
            <span className="tickets__item-sub-heading">From</span>
            <p className="tickets__item-date-time">{ticket.when.from}</p>
          </div>
          <div className="tickets__item-date-box">
            <span className="tickets__item-sub-heading">To</span>
            <p className="tickets__item-date-time">{ticket.when.to}</p>
          </div>
        </section>
        <section className="tickets__item-info">
          <span className="tickets__item-sub-heading">Info</span>
          <p className="tickets__item-info-seat">Section {ticket.section} - Seat {ticket.seatNumber}</p>
        </section>
      </main>
      <footer className="tickets__item-footer">
        <p className="tickets__item-order-barcode">{ticket.id}</p>
        <p className="tickets__item-order-code">#{ticket.id}</p>
      </footer>
    </li>
  );
}

export default TicketsListItem;

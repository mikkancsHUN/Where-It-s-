
function TicketsListItem() {
  return (
    <li className="tickets__item">
        <header className="tickets__item-header">
            <span className="tickets__item-sub-heading">What</span>
            <h2 className="tickets__item-heading">Lasse-Stefanz</h2>
        </header>
        <main className="tickets__item-main">
            <article className="tickets__item-where">
                <span className="tickets__item-sub-heading">Where</span>
                <h3 className="tickets__item-where-place">Kjell Härnqvistsalen</h3>
                <p className="tickets__item-where-building">Göteborgs universitet. Pedagogen, hus A</p>
            </article>
            <section className="tickets__item-date">
                <div className="tickets__item-date-box">
                    <span className="tickets__item-sub-heading">When</span>
                    <p className="tickets__item-date-time">21 Mar</p>
                </div>
                <div className="tickets__item-date-box">
                    <span className="tickets__item-sub-heading">From</span>
                    <p className="tickets__item-date-time">19.00</p>
                </div>
                <div className="tickets__item-date-box">
                    <span className="tickets__item-sub-heading">To</span>
                    <p className="tickets__item-date-time">21.00</p>
                </div>
            </section>
            <section className="tickets__item-info">
                <span className="tickets__item-sub-heading">Info</span>
                <p className="tickets__item-info-seat">Section C - seat 233, bring umbrella</p>
            </section>
        </main>
        <footer className="tickets__item-footer">
            <p className="tickets__item-order-barcode">#A2ED7</p>
            <p className="tickets__item-order-code">#A2ED7</p>
        </footer>
    </li>
  )
}

export default TicketsListItem
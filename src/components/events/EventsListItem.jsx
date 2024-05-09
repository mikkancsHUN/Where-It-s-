import './events-list.css'
function EventsListItem() {
  return (
    <li className="events__list-item">
            <div className="events__date">
                <span className="events__day">21</span>
                <span className="events__month">Mar</span>
            </div>
            <article className="events__details">
                <h2 className="events__heading">Lasse-Stefanz</h2>
                <p className="events__artist">Kjell Härnqvistsalen</p>
                <div className='events__info'>
                    <span className="events__time">19.00 - 21.00</span>
                    <span className="events__price">350 sek</span>
                </div>
            </article>
        </li>
  )
}

export default EventsListItem
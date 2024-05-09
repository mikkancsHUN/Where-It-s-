

import './events-list.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function EventsList() {
  const [events, setEvents] = useState([]);


  useEffect(() => {
    axios
        .get('https://santosnr6.github.io/Data/events.json')
        .then((response) => {
            console.log('API Response:', response); // Debugging
            if (response.data.events) {
                setEvents(response.data.events);
            } else {
                console.error('No events key in response data');
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, []);

console.log('Loaded Events:', events); // Debugging

if (events.length === 0) {
    return <p>Loading events...</p>;
}

return (
    <ul className="events__list">
        {events.map((event) => (
            <li className="events__list-item" key={event.id}>
                <div className="events__date">
                    {event.when && (
                        <>
                            <span className="events__day">
                                {event.when.date.split(' ')[0]}
                            </span>
                            <span className="events__month">
                                {event.when.date.split(' ')[1].substring(0, 3)}
                            </span>
                        </>
                    )}
                </div>
                <article className="events__details">
                    <h2 className="events__heading">{event.name}</h2>
                    <p className="events__place">{event.where}</p>
                    <div className="events__info">
                        {event.when && (
                            <span className="events__time">
                                {event.when.from} - {event.when.to}
                            </span>
                        )}
                        <span className="events__price">{event.price} sek</span>
                    </div>
                </article>
            </li>
        ))}
    </ul>
);
}

export default EventsList
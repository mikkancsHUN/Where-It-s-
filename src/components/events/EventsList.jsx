import './events-list.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { EventContext } from '../../context/EventContext';
import { useNavigate } from 'react-router-dom'; // Navigációhoz

function EventsList() {
  const [events, setEvents] = useState([]);
  const { setSelectedEvent, setTicketCount } = useContext(EventContext); // Kontextus állapot beállítása
  const navigate = useNavigate(); // Navigálás

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

  if (events.length === 0) {
    return <p className='warning'>Loading events...</p>;
  }

  const handleClick = (event) => {
    // Az összes esemény lekérése a localStorage-ból
    const allEvents = JSON.parse(localStorage.getItem('selectedEvents')) || [];
  
    // Az új esemény hozzáadása az összes eseményhez
    const updatedEvents = [...allEvents, event];
  
    // Frissített események mentése localStorage-ba
    localStorage.setItem('selectedEvents', JSON.stringify(updatedEvents));
  
    setSelectedEvent(event); // Az állapot beállítása a kontextusban
    setTicketCount(1); // Alapértelmezett jegyszám egyre állítása
    navigate('/addtocard'); // Navigálás a kosár oldalra
  };

  return (
    <ul className="events__list">
      {events.map((event) => (
        <li
          className="events__list-item"
          key={event.id}
          onClick={() => handleClick(event)}
        >
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

export default EventsList;

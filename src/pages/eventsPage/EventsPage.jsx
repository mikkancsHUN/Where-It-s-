
import EventsList from '../../components/events/EventsList'
import './events-page.css'
function EventsPage() {
  return (
    <section className="events__page">
      <h1>Events</h1>
      <form>
        <img className='search-icon' src="/src/assets/search-icon.svg" alt="" />
        <input type="text" />
      </form>
      <EventsList />
    </section>
    
  )
}

export default EventsPage
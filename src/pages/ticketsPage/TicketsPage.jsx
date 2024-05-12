import TicketsList from '../../components/tickets/TicketsList'
import './tickets-page.css'
function TicketsPage() {
  return (
    <section className="tickets__page">
      <h1 className='tickets__title'>Tickets</h1>
      <TicketsList />
    </section>
    
  )
}

export default TicketsPage
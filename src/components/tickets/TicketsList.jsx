import TicketsListItem from './TicketsListItem'
import './tickets-list.css'
function TicketsList() {
  return (
    <ul className="tickets__list">
        <TicketsListItem />
    </ul>
  )
}

export default TicketsList
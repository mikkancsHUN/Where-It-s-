import TicketsListItem from './TicketsListItem';
import './tickets-list.css';

function TicketsList() {
  // Lekérjük az elmentett rendeléseket a localStorage-ból
  const ticketList = JSON.parse(localStorage.getItem('tickets')) || [];
  

  return (
    <ul className="tickets__list">
      {ticketList.map((ticket, index) => (
        <TicketsListItem ticket={ticket} key={index} />
      ))}
    </ul>
  );
}

export default TicketsList;

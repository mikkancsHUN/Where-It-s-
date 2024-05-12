import { createContext } from 'react';

export const EventContext = createContext({
  selectedEvent: null,
  setSelectedEvent: () => {},
  ticketCount: 0,
  setTicketCount: () => {},
});

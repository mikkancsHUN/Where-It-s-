import { EventContext } from './context/EventContext'
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import AddToCartPage from "./pages/addToCartPage/AddToCartPage"
import EventsPage from "./pages/eventsPage/EventsPage"
import HomePage from "./pages/homePage/HomePage"
import SendOrderPage from "./pages/sendOrderPage/SendOrderPage"
import TicketsPage from "./pages/ticketsPage/TicketsPage"

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ticketCount, setTicketCount] = useState(0);

  return (
    <div className="app">
      <EventContext.Provider value={{ selectedEvent, setSelectedEvent, ticketCount, setTicketCount }}>
          <Routes>
            <Route path="/" element={<HomePage title={`Where It's @`}/>}/>
            <Route path="/events" element={<EventsPage />}/>
            <Route path="/addtocard" element={<AddToCartPage />}/>
            <Route path="/sendorder" element={<SendOrderPage />}/>
            <Route path="/tickets" element={<TicketsPage />}/>
          </Routes>
        <Navbar />
      </EventContext.Provider>
    </div>
  );
}

export default App

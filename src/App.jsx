import Navbar from "./components/navbar/Navbar"
import AddToCartPage from "./pages/addToCartPage/AddToCartPage"
import EventsPage from "./pages/eventsPage/EventsPage"
import HomePage from "./pages/homePage/HomePage"
import SendOrderPage from "./pages/sendOrderPage/SendOrderPage"
import TicketsPage from "./pages/ticketsPage/TicketsPage"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage title={`Where It's @`}/>}/>
        <Route path="/events" element={<EventsPage />}/>
        <Route path="/addtocard" element={<AddToCartPage />}/>
        <Route path="/sendorder" element={<SendOrderPage />}/>
        <Route path="/tickets" element={<TicketsPage />}/>
      </Routes>
      <Navbar />
    </div>
  )
}

export default App

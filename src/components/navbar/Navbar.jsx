import { Link } from "react-router-dom"
import './navbar.css'

function Navbar() {
  return (
    <nav className="nav">
        <ul className="nav__list">
            <li><Link to='/'  className="nav__list-item">Home</Link></li>
            <li><Link to='events' className="nav__list-item">Events</Link></li>
            <li><Link to='addtocard' className="nav__list-item">Event</Link></li>
            <li><Link to='sendorder' className="nav__list-item">Order</Link></li>
            <li><Link to='tickets' className="nav__list-item">Tickets</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate importálása
import AddToCartBtn from '../../components/add-to-cart/AddToCartBtn';
import AddToCartCounter from '../../components/add-to-cart/AddToCartCounter';
import AddToCartDetails from '../../components/add-to-cart/AddToCartDetails';
import { EventContext } from '../../context/EventContext';
import './add-to-cart-page.css';

function AddToCartPage() {
  const { selectedEvent, ticketCount } = useContext(EventContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const ticketPrice = selectedEvent.price; // Jegyár
    const totalPrice = ticketCount * ticketPrice; // Összesített ár

    const orderData = {
      eventName: selectedEvent.name,
      eventTime: `${selectedEvent.when.date} kl ${selectedEvent.when.from} - ${selectedEvent.when.to}`,
      ticketCount: ticketCount,
      price: totalPrice // Ár hozzáadása az orderData objektumhoz
    };

    // Korábbi rendelések lekérése localStorage-ből
    const existingOrders = JSON.parse(localStorage.getItem('orderData')) || [];

    // Új rendelés hozzáadása a többihez
    const updatedOrders = [...existingOrders, orderData];

    // Frissített rendelések mentése localStorage-be
    localStorage.setItem('orderData', JSON.stringify(updatedOrders));

    navigate('/sendorder');
  };
  
  return (
    <section className='add-to-cart__page'>
      <article className='add-to-cart__infos'>
        <h1>Event</h1>
        <p className={`add-to-cart__info ${selectedEvent ? '' : 'd-none'}`}>You are about to score some tickets to</p>
        <AddToCartDetails />
      </article>
      <AddToCartCounter />
      <AddToCartBtn handleClick={handleClick} />
    </section>
  );
}

export default AddToCartPage;


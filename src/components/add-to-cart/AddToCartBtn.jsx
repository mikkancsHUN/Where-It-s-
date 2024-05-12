
import './add-to-cart-btn.css';

function AddToCartBtn({ handleClick }) {
  return (
    <button className="add-to-cart__btn" onClick={handleClick}>
      Lägg i varukorgen
    </button>
  );
}

export default AddToCartBtn;

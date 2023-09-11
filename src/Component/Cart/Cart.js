import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
  remove,
  clearCart,
  increseCart,
  decreaseCart,
} from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="wrappers">
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {items != null && items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="empty-image">
            <img src="https://thumbs.dreamstime.com/b/man-pushing-shopping-cart-empty-19880286.jpg" />
          </div>
        </div>
      ) : (
        <div >
          <div className="cart-items">
          <div className="Title" data-testid="title">
            <h3>Item</h3>
            <h3>Remove</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Sub Total</h3>
            {/* <h3 className="Total">Total</h3> */}
          </div>
          <div >
            {items?.map((cartItem) => (
              <div className="cart-item">
                <div className="product-image">
                <img src={cartItem.image} alt={cartItem.name} />
                </div>
                <div className="remove">
                  <DeleteIcon onClick={() => dispatch(remove(cartItem.id))}/>
                </div>
                <div className="price">
                <h5>${Math.floor(cartItem.price)}</h5>
                </div>
                <div className="quantity">
                  <RemoveIcon onClick={() => dispatch(decreaseCart(cartItem))}/>
                  <h6 className="count">{cartItem.cartQuantity}</h6>
                  <AddIcon onClick={() => dispatch(increseCart(cartItem))}/>
                </div>
                <div className="subtotal">
                  <h5 className="subtotals">${Math.floor(cartItem.price * cartItem.cartQuantity)}</h5>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className="cart-summary">
            <button onClick={() => dispatch(clearCart())} className="clear-btn">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;

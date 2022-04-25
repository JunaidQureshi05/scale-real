import React from 'react';
import './CartPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  let dispatch = useDispatch();
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="CartPage">
      {cartItems.map((item) => (
        <div className="CartItem">
          <div className="image">
            <img src={item.image} />
          </div>
          <h1>{item.name}</h1>
          <select
            value={item.qty}
            onChange={(e) =>
              dispatch(addToCart(item.product, Number(e.target.value)))
            }
          >
            {[...Array(10).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
          <button onClick={() => removeFromCartHandler(item.product)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;

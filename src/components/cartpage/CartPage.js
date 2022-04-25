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
      <div className="left">
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
      <div className="right">
        <h2>
          Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
        </h2>
        $
        {cartItems
          .reduce((acc, item) => acc + item.qty * item.price, 0)
          .toFixed(2)}
      </div>
    </div>
  );
};

export default CartPage;

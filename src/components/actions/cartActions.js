import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  console.log('inside action');
  const { data } = await axios.get(`/products/${id}`);
  console.log(data);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.title,
      image: data.image,
      price: data.price,
      countInStock: data.rating.count,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

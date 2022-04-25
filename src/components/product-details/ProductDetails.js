import React from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';
const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  let count = 0;
  let { title, image, description, rating, price } = product;
  if (rating) {
    count = rating.count;
  }
  const addToCartHandler = () => {
    console.log('clicked');
    dispatch(addToCart(product.id, Number(qty)));
    navigate(`/cart`);
  };

  return (
    <div className="ProductDetails">
      <div className="left">
        <h1>{title}</h1>
        <img src={image} />
      </div>
      <div className="center">
        <p>{description}</p>
      </div>
      <div className="right">
        <select name="" id="" onChange={(e) => setQty(e.target.value)}>
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <p className="price">${price}</p>
        <button onClick={addToCartHandler}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;

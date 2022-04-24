import React from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import Rating from '../rating/Rating';
import { useSelector, useDispatch } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
const ProductDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
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
        <select name="" id="">
          {[...Array(count).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <p className="price">${price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;

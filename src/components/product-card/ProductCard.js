import React from 'react';
import Rating from '../rating/Rating';
import './ProductCard.css';
import { Link } from 'react-router-dom';
const ProductCard = ({ id, title, image, price, description, rating }) => {
  return (
    <div className="ProductCard">
      <Link to={`/products/${id}`}>
        <h1 className="title">{title}</h1>
        <img src={image} />
      </Link>

      <div className="inline">
        <div className="price">
          <span className="money-symbol">$</span>
          <span className="amount">{price}</span>
        </div>
        <Rating value={rating.rate} text={`from ${rating.count} users.`} />
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import Rating from '../rating/Rating';
const ProductDetails = () => {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  let { title, image, description, rating, price } = product;
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
          {[...Array(rating.count).keys()].map((x) => (
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

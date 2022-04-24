import React from 'react';
import ProductList from '../product-list/ProductList';
import './Category.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Nav from '../nav/Nav';
const Category = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  let filtered = [];
  let { name } = useParams();
  if (name === 'men-fashion') {
    filtered = products.filter(
      (product) => product.category === "men's clothing"
    );
  } else if (name === 'women-fashion') {
    filtered = products.filter(
      (product) => product.category === "women's clothing"
    );
  } else {
    filtered = products.filter((product) => product.category === name);
  }
  return (
    <div>
      <Nav />
      <h1 className="title">Latest in {name.toUpperCase()}</h1>
      <ProductList products={filtered} />
    </div>
  );
};

export default Category;

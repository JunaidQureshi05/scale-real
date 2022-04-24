import React from 'react';
import Nav from '../nav/Nav';
import ProductList from '../product-list/ProductList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return (
    <div>
      <Nav />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;

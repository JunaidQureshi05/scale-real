import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/product-list/ProductList';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/product-details/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './actions/productActions';
function App() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

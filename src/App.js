import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/product-list/ProductList';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/product-details/ProductDetails';
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    };
    getProducts();
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

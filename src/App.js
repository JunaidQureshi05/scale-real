import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/product-details/ProductDetails';
import HomePage from './components/homepage/HomePage';
import Category from './components/category/Category';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/category/:name" element={<Category />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

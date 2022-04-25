import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">Fake Store</div>
      <ul className="nav">
        <li>
          <Link to="/">All Products</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

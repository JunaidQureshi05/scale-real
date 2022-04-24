import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">Fake Store</div>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/"> Products </Link>
        </li>
        <li>
          <Link to="/">Cart</Link>
        </li>
        <li>
          <Link to="/">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/category/jewelery"> Jewelery</Link>
      <Link to="/category/electronics"> Electronics</Link>
      <Link to="/category/men-fashion"> Mens Fashion</Link>
      <Link to="/category/women-fashion"> Womens Fashion</Link>
    </div>
  );
};

export default Nav;

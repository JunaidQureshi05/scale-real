import React from 'react';
import Loading from '../loading/Loading';
import ProductCard from '../product-card/ProductCard';
import './ProductList.css';
const ProductList = ({ products }) => {
  console.log(products);
  if (products.length === 0) {
    return <Loading />;
  }
  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;

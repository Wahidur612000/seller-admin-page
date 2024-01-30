import React from 'react';
import './ProductList.css';

const ProductList = ({ category, products, onRemoveProduct }) => {
  
  if (!products) {
    return <div>Loading...</div>; 
  }

  
  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {`${product.id}. ${product.name} - ₹ ${product.price}  `}
            <button onClick={() => onRemoveProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
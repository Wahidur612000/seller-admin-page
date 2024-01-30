import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ onSelectCategory,category, onAddProduct }) => {
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');

  const categories = ['electronic', 'food', 'skincare'];

  const handleAddProduct = () => {
    onAddProduct({
      id: productId,
      price: sellingPrice,
      name: productName,
      category: category,
    });

    // Clear input fields
    setProductId('');
    setSellingPrice('');
    setProductName('');
  };

  return (
    <div>
      
      <div>
        <label>Product ID:</label>
        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
      </div>
      <div>
        <label>Selling Price:</label>
        <input type="text" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
      </div>
      <div>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>
      <div>
      <label>Choose a category:</label>
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
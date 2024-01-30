import React, { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import './AdminPage.css';

const AdminPage = () => {
  const categories = ['electronic', 'food', 'skincare'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [products, setProducts] = useState({});

  useEffect(() => {
    // Load existing products from local storage on component mount
    const storedProducts = categories.reduce((acc, category) => {
      acc[category] = JSON.parse(localStorage.getItem(category)) || [];
      return acc;
    }, {});
    setProducts(storedProducts);
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const handleAddProduct = (newProduct) => {
    const updatedProducts = { ...products, [selectedCategory]: [...products[selectedCategory], newProduct] };
    setProducts(updatedProducts);

    // Save products to local storage
    localStorage.setItem(selectedCategory, JSON.stringify(updatedProducts[selectedCategory]));
  };


const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) => {
      // Iterate through all categories and remove the product with the given productId
      const updatedProducts = {};
      for (const category in prevProducts) {
        updatedProducts[category] = prevProducts[category].filter((product) => product.id !== productId);
      }
  
      // Save updated products to local storage
      for (const category in updatedProducts) {
        localStorage.setItem(category, JSON.stringify(updatedProducts[category]));
      }
  
      return updatedProducts;
    });
  };
  
  return (
    <div>
      <h1>Seller's Admin Page</h1>
      <h2>Add Product</h2>
      <CategorySelector categories={categories} onSelectCategory={handleCategoryChange} />
       <ProductForm category={selectedCategory} onAddProduct={handleAddProduct} />
       
      <h2>Product List</h2>
      {categories.map(category => (
        <ProductList
          key={category}
          category={category}
          products={products[category]}
          onRemoveProduct={handleRemoveProduct} 
        />
      ))}
    </div>
  );
};

export default AdminPage;
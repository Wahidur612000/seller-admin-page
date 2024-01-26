import React from 'react';
import './CategorySelector.css';


const CategorySelector = ({ onSelectCategory }) => {
  const categories = ['electronic', 'food', 'skincare'];

  return (
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
  );
};

export default CategorySelector;

// src/pages/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'; // Import the CSS file for styling

const categories = [
  { name: 'Groceries', image: 'https://via.placeholder.com/150x100?text=Groceries', link: '/category/groceries' },
  { name: 'Electronics', image: 'https://via.placeholder.com/150x100?text=Electronics', link: '/category/electronics' },
  { name: 'Fashion', image: 'https://via.placeholder.com/150x100?text=Fashion', link: '/category/fashion' },
  { name: 'Entertainment', image: 'https://via.placeholder.com/150x100?text=Entertainment', link: '/category/entertainment' },
];

function Categories() {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div key={category.name} className="category-item">
          <Link to={category.link}>
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Categories;

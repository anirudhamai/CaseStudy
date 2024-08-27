import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // For custom styles

function HomePage() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>MyStore</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/category1">Category 1</Link></li>
            <li><Link to="/category2">Category 2</Link></li>
            <li><Link to="/category3">Category 3</Link></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-links">
          <Link to="/login">Login</Link> | <Link to="/logout">Logout</Link>
        </div>
        <div className="cart-icon">
          <Link to="/cart">
            <span>Cart (0)</span>
          </Link>
        </div>
      </header>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products">
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$29.99</p>
            <p>Short description of product 1.</p>
            <Link to="/products/1">View Details</Link>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$49.99</p>
            <p>Short description of product 2.</p>
            <Link to="/products/2">View Details</Link>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$19.99</p>
            <p>Short description of product 3.</p>
            <Link to="/products/3">View Details</Link>
          </div>
        </div>
      </section>

      <section className="category-showcase">
        <h2>Main Categories</h2>
        <div className="categories">
          <div className="category">
            <img src="https://via.placeholder.com/150" alt="Category 1" />
            <h3>Category 1</h3>
            <Link to="/category1">Shop Now</Link>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/150" alt="Category 2" />
            <h3>Category 2</h3>
            <Link to="/category2">Shop Now</Link>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/150" alt="Category 3" />
            <h3>Category 3</h3>
            <Link to="/category3">Shop Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

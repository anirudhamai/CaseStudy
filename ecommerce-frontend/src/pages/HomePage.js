import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'; // Correct imports
import Categories from '../pages/Categories'; // Import the Categories component
import SliderComponent from '../pages/SliderComponent'; // Import the Slider component

// Example product data
const productData = [
  { id: 1, name: 'Product 1', price: '₹29.99', imgSrc: 'https://via.placeholder.com/300x200?text=Product+1' },
  { id: 2, name: 'Product 2', price: '₹19.99', imgSrc: 'https://via.placeholder.com/300x200?text=Product+2' },
  { id: 3, name: 'Product 3', price: '₹39.99', imgSrc: 'https://via.placeholder.com/300x200?text=Product+3' },
  { id: 4, name: 'Product 4', price: '₹49.99', imgSrc: 'https://via.placeholder.com/300x200?text=Product+4' },
];

function HomePage() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [searchCategory, setSearchCategory] = useState('');
  const navigate = useNavigate();

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const handleMouseLeave = () => {
    setShowLoginDropdown(false);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSearchCategory(selectedCategory);
    
    if (selectedCategory) {
      navigate(`/category/${selectedCategory}`);
    }
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="https://via.placeholder.com/120x50" alt="Company Logo" />
        </div>

        <div className="search-bar">
          <select 
            className="category-dropdown" 
            value={searchCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>Select Category</option>
            <option value="groceries">Groceries</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <input type="text" placeholder="Search..." aria-label="Search" />
          <button className="search-icon" aria-label="Search">
            <FaSearch />
          </button>
        </div>

        <div 
          className="login-container" 
          onMouseEnter={toggleLoginDropdown} 
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/login" className="login-button">Login</Link>
          {showLoginDropdown && (
            <div className="login-dropdown">
              <Link to="/register">New Customer? Sign-up</Link>
              <Link to="/profile">My Profile</Link>
              <Link to="/myorders">Orders</Link>
              <Link to="/wishlist">WishList</Link>
              
            </div>
          )}
        </div>

        <div className="cart-icon">
          <Link to="/wishlist">
            <FaHeart /> <span>WishList</span>
          </Link>
        </div>

        <div className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart /> <span>Cart</span>
          </Link>
        </div>
      </header>

      <Categories />
      
      <SliderComponent />

      {/* Product Sections */}
      <section className="product-sections">
        <div className="product-row">
          <h2>Best Deals of the Day</h2>
          <div className="products">
            {productData.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imgSrc} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <button className="buy-now">Buy Now</button>
                  <div className="product-actions">
                    <button className="wish-list"><FaHeart /> Add to Wish List</button>
                    <button className="add-to-cart"><FaShoppingCart /> Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="product-row">
          <h2>More Than 50% Off</h2>
          <div className="products">
            {productData.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imgSrc} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <button className="buy-now">Buy Now</button>
                  <div className="product-actions">
                    <button className="wish-list"><FaHeart /> Add to Wish List</button>
                    <button className="add-to-cart"><FaShoppingCart /> Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="product-row">
          <h2>Featured Products</h2>
          <div className="products">
            {productData.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imgSrc} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                  <button className="buy-now">Buy Now</button>
                  <div className="product-actions">
                    <button className="wish-list"><FaHeart /> Add to Wish List</button>
                    <button className="add-to-cart"><FaShoppingCart /> Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

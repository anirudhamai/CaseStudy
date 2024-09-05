import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './HomePage.css';
import axios from 'axios';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'; // Correct imports
import Categories from '../pages/Categories'; // Import the Categories component
import SliderComponent from '../pages/SliderComponent'; // Import the Slider component



function HomePage() {

  const [productData, setProducts] = useState([]);
  const [CategoryData, setCategoryData] = useState([]);
  // const [userId, setUserId] = useState();
  const location = useLocation();
  const userId = location.state.userId;

  useEffect(() => {
  // setUserId(userid);
  // console.log("in home, " , userId);
  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      if(!token)
      {
        navigate('/login');
      }
      const url= 'http://localhost:5120/api/Product';
      // debugger;
      const response = await axios.get(url , {
      headers: {
      Authorization: `Bearer ${token}`
      }
      });
      setProducts(response.data.$values);
      //console.log(productData);
      } 
      catch (error) {
        if(error.code == "ERR_NETWORK"){
          alert(error.message);
          localStorage.removeItem('token');
          navigate('/login');
          console.log(error.message);
        }
      if(error.response.status === 401)
      {
        alert("Your token expired or you are not authorized for this page");
        localStorage.removeItem('token');
        navigate('/login');
      }
      console.error('Error fetching products', error);
    }
  };
  fetchProducts();
}, []);

useEffect(() => {
  const fetchCategory = async () => {
    try {
      const token = localStorage.getItem('token');
      if(!token)
      {
        navigate('/');
      }
      const url= 'http://localhost:5120/api/Category';
      const response = await axios.get(url , {
      headers: {
      Authorization: `Bearer ${token}`
      }
      });
      setCategoryData(response.data.$values || []);
      } 
      catch (error) {
        console.log(error);
        if(error.code == "ERR_NETWORK"){
          alert(error.message);
          localStorage.removeItem('token');
          navigate('/login');
        }
      if(localStorage.getItem('token') && (error.response.status === 401))
      {
        alert("Your token expired or you are not authorized for this page");
        localStorage.removeItem('token');
        navigate('/login');
      }
      console.error('Error fetching products', error);
    }
  };
  fetchCategory();
}, []);


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
    const selectedCategoryId = event.target.value;
    const selectedCategory = CategoryData.find(category => category.$id === selectedCategoryId);
    setSearchCategory(selectedCategory);
    if (selectedCategory) {
      navigate(`/category/electronics`, { state: { userId: userId, categoryId: selectedCategory.categoryId, categoryName: selectedCategory.categoryName } });
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
            {CategoryData.map(category => (
            <option key={category.$id} value={category.$id}>
              {category.categoryName}
            </option>
          ))}
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

      <Categories userId={userId}/>
      
      <SliderComponent />

      {/* Product Sections */}
      <section className="product-sections">
        <div className="product-row">
          <h2>Best Deals of the Day</h2>
          <div className="products">
            {productData.map(product => (
              <div key={product.productId} className="product-card">
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

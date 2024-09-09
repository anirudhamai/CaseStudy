
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
// import './Navbar.css';
// import logo from "../assets/images/shopease.jpg";

// function Navbar() {
//   const [showLoginDropdown, setShowLoginDropdown] = useState(false);
//   const [searchCategory, setSearchCategory] = useState('');
//   const navigate = useNavigate();

//   const toggleLoginDropdown = () => {
//     setShowLoginDropdown(!showLoginDropdown);
//   };

//   const handleMouseLeave = () => {
//     setShowLoginDropdown(false);
//   };

//   const handleCategoryChange = (event) => {
//     const selectedCategory = event.target.value;
//     setSearchCategory(selectedCategory);

//     if (selectedCategory) {
//       navigate(`/category/${selectedCategory}`);
//     }
//   };

//   const handleProfileClick = () => {
//     navigate('/user');
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src={logo} alt="Company Logo" />
//       </div>

//       <div className="search-bar">
//         <select 
//           className="category-dropdown" 
//           value={searchCategory}
//           onChange={handleCategoryChange}
//         >
//           <option value="" disabled>Select Category</option>
//           <option value="groceries">Groceries</option>
//           <option value="electronics">Electronics</option>
//           <option value="fashion">Fashion</option>
//           <option value="entertainment">Entertainment</option>
//         </select>
//         <input type="text" placeholder="Search..." aria-label="Search" />
//         <button className="search-icon" aria-label="Search">
//           <FaSearch />
//         </button>
//       </div>

//       <div 
//         className="login-container" 
//         onMouseEnter={toggleLoginDropdown} 
//         onMouseLeave={handleMouseLeave}
//       >
//         <Link to="/login" className="login-button">Login</Link>
//         {showLoginDropdown && (
//           <div className="login-dropdown">
//             <Link to="/register">New Customer? Sign-up</Link>
//             <Link to="/user">My Profile</Link>
//             <Link to="/myorders">Orders</Link>
//             <Link to="/wishlist">WishList</Link>
//           </div>
//         )}
//       </div>

//       <div className="cart-icon">
//         <Link to="/wishlist">
//           <FaHeart /> <span>WishList</span>
//         </Link>
//       </div>

//       <div className="cart-icon">
//         <Link to="/cart">
//           <FaShoppingCart /> <span>Cart</span>
//         </Link>
//       </div>

//       <div className="profile-icon" onClick={handleProfileClick} aria-label="Profile">
//         <FaUser />
//       </div>
//     </header>
//   );
// }

// export default Navbar;





//on progress code 

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';
import logo from "../assets/images/shopease.jpg";

function Navbar() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
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

  const handleProfileClick = () => {
    navigate('/user');
  };

  // Search suggestions list
  const searchSuggestions = [
    'Best mobiles under 50,000',
    'Best phones under 10,000',
    'Best phones under 12,000',
    'Best phones under 15,000',
    'Best phones under 20,000',
    'Best phones under 25,000',
    'Best phones under 30,000',
    'Best TV under 50,000',
    'Best laptops under 50,000',
    'Best cameras under 50,000',
    'Best refrigerators under 50,000',
    'Best washing machines under 50,000',
    'Best air conditioners under 50,000',
    'Good review fans',
    'Best headphones under 5,000',
    'Best earphones under 5,000',
    'Best earbuds under 5,000'
  ];

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    // Filter suggestions based on the search term
    const filtered = searchSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion); // Set search bar value to the clicked suggestion
    setFilteredSuggestions([]); // Clear suggestions after selection
    setShowSuggestions(false); // Hide suggestions dropdown
  };

  const handleSearchBarBlur = () => {
    setShowSuggestions(false); // Hide suggestions when focus is lost
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
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
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleSearchChange} 
          onBlur={handleSearchBarBlur}
          placeholder="Search..." 
          aria-label="Search" 
        />
        <button className="search-icon" aria-label="Search">
          <FaSearch />
        </button>

        {/* Search Suggestions Dropdown */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="suggestions-dropdown">
            {filteredSuggestions.map((suggestion, index) => (
              <li 
                key={index} 
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
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
            <Link to="/user">My Profile</Link>
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

      <div className="profile-icon" onClick={handleProfileClick} aria-label="Profile">
        <FaUser />
      </div>
    </header>
  );
}

export default Navbar;




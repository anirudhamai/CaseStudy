// // src/pages/CartPage.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import './CartPage.css'; // For custom styles

// function CartPage() {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const [cartItems, setCartItems] = React.useState([
//     {
//       id: 1,
//       name: 'Sample Product 1',
//       price: 29.99,
//       quantity: 2,
//       image: 'https://via.placeholder.com/100' // Sample image URL
//     },
//     {
//       id: 2,
//       name: 'Sample Product 2',
//       price: 49.99,
//       quantity: 1,
//       image: 'https://via.placeholder.com/100' // Sample image URL
//     }
//   ]);

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleBuyNow = () => {
//     navigate('/payment'); // Redirect to PaymentPage
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       <ul>
//         {cartItems.map(item => (
//           <li key={item.id} className="cart-item">
//             <img src={item.image} alt={item.name} className="cart-item-image" />
//             <div className="cart-item-details">
//               <p>{item.name}</p>
//               <p>₹{item.price} x {item.quantity}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ₹{total.toFixed(2)}</h3>
//       <button onClick={handleBuyNow} className="buy-now-button">Buy Now</button>
//     </div>
//   );
// }

// export default CartPage;


// src/pages/CartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './CartPage.css'; // For custom styles

function CartPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: 'Sample Product 1',
      price: 29.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100' // Sample image URL
    },
    {
      id: 2,
      name: 'Sample Product 2',
      price: 49.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100' // Sample image URL
    }
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleBuyNow = () => {
    navigate('/payment'); // Redirect to PaymentPage
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price} x {item.quantity}</p>
              <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total Amount: ₹{total.toFixed(2)}</h3>
        <button onClick={handleBuyNow} className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
}

export default CartPage;

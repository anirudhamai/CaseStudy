import React, { useContext, useState } from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartPage.css'; // Importing custom CSS

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalAmount } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState({});
  const location = useLocation();
  const [ cartId, setCartId ] = useState();
  setCartId(location.state);
  console.log("cart id is ", cartId);

  const handleCheckboxChange = (productId) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [productId]: !prevState[productId]
    }));
  };

  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    updateQuantity(productId, newQuantity);
  };

  const calculateSelectedTotal = () => {
    return cartItems.reduce((total, item) => 
      selectedItems[item.id] ? total + item.price * item.quantity : total, 
      0
    );
  };

  return (
    <div className="cart-page">
      <h2 className="cart-page-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <div className="quantity-selector">
                    <label>Quantity: </label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e)}
                      className="quantity-input"
                    />
                  </div>
                  <div className="checkbox-remove">
                    <input
                      type="checkbox"
                      checked={!!selectedItems[item.id]}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="item-checkbox"
                    />
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-totals">
  <button 
    className="buy-now-button"
    onClick={() => window.location.href = '/payment-page?amount=' + getTotalAmount()}
  >
    Buy Now - Total Amount: ₹{getTotalAmount()}
  </button>
  <button 
    className="buy-now-button"
    onClick={() => window.location.href = '/payment-page?amount=' + calculateSelectedTotal()}
  >
    Buy Now - Selected Amount: ₹{calculateSelectedTotal()}
  </button>
</div>
        </div>
      )}
    </div>
  );
}

export default CartPage;

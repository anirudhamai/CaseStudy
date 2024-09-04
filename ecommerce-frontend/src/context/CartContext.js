import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]); // Manage orders here

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevItems.map(item => 
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  
  const addOrder = (orderDetails) => {
    setOrders(prevOrders => [...prevOrders, orderDetails]);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  
  return (
    <CartContext.Provider value={{ cartItems,orders, addToCart, removeFromCart, updateQuantity, getTotalAmount, addOrder , clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

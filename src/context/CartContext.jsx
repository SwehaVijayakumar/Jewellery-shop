import React, { createContext, useState, useContext } from "react";

// Create context
const CartContext = createContext();

// Custom hook for using cart easily
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (itemName) => {
    setCartItems((prev) => prev.filter((item) => item.name !== itemName));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

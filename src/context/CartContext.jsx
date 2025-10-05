// src/context/CartContext.jsx
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    if (!cart.find((item) => item.name === product.name)) {
      setCart([...cart, product]);
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.name === product.name)) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, wishlist, addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

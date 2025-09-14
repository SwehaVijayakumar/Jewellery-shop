import React, { useState } from "react";
import "./Navbar.css";
import { useCart } from "../context/CartContext"; // import context

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart(); // get cart state

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h1>Jewelry</h1>
      </div>

      {/* Nav Links (desktop) */}
      <ul className="nav-links desktop">
        <li>Home</li>
        <li>Shop</li>
        <li>Categories</li>
        <li>Login</li>
        <li>Wishlist</li>
      </ul>

      {/* Cart + Hamburger */}
      <div className="right-icons">
        <div className="cart-wrapper">
          {/* <div className="cart-icon">🛒</div> */}
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(true)}>☰</div>
      </div>

      {/* Sidebar (mobile) */}
      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>✖</span>
        <ul>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>Shop</li>
          <li onClick={() => setMenuOpen(false)}>Categories</li>
          <li onClick={() => setMenuOpen(false)}>Login</li>
          <li onClick={() => setMenuOpen(false)}>Wishlist</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

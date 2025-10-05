import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <h1 className="logo"><NavLink to="/">JEWELLERY SHOP</NavLink></h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>🔍</button>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links mobile-open" : "nav-links"}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
        <li><NavLink to="/categories" onClick={() => setMenuOpen(false)}>Categories</NavLink></li>
        <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
        <li><NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</NavLink></li>
      </ul>

      {/* Right Side Icons */}
      <div className="right-icons">
        <NavLink to="/cart">🛒</NavLink>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

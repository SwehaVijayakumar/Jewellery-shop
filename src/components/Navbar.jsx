import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">JEWELLERY SHOP</h1>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

      <ul className={menuOpen ? "nav-links mobile-open" : "nav-links"}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/categories">Categories</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/wishlist">Wishlist</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
      </ul>

      <div className="right-icons">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

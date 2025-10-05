import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

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

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <h1 className="logo">JEWELLERY SHOP</h1>

        {/* Right-side controls: Hamburger + Theme toggle */}
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "🌙" : "☀️"}
          </button>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        {/* Desktop nav links */}
        <ul className="nav-links">
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/shop" onClick={closeMenu}>Shop</NavLink></li>
          <li><NavLink to="/categories" onClick={closeMenu}>Categories</NavLink></li>
          <li><NavLink to="/login" onClick={closeMenu}>Login</NavLink></li>
          <li><NavLink to="/wishlist" onClick={closeMenu}>Wishlist</NavLink></li>
          <li><NavLink to="/cart" onClick={closeMenu}>Cart</NavLink></li>
        </ul>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Right-side drawer for mobile */}
      <div className={`nav-drawer ${menuOpen ? "open" : ""}`}>
        {/* Close icon inside drawer */}
        <div className="drawer-close" onClick={closeMenu}>✕</div>

        <ul className="nav-links">
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/shop" onClick={closeMenu}>Shop</NavLink></li>
          <li><NavLink to="/categories" onClick={closeMenu}>Categories</NavLink></li>
          <li><NavLink to="/login" onClick={closeMenu}>Login</NavLink></li>
          <li><NavLink to="/wishlist" onClick={closeMenu}>Wishlist</NavLink></li>
          <li><NavLink to="/cart" onClick={closeMenu}>Cart</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

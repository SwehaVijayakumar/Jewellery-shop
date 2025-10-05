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

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Login", path: "/login" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">JEWELLERY SHOP</h1>

        {/* Right controls */}
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "🌙" : "☀️"}
          </button>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        {/* Desktop links */}
        <ul className="nav-links desktop">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-close" onClick={closeMenu}>
          ✕
        </div>
        <ul className="nav-links">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink to={link.path} onClick={closeMenu}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

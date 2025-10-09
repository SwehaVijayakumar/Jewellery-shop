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
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", newTheme);
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
      <nav className="navbar">
        <div className="logo">JEWELLERY SHOP</div>

        {/* Desktop Links */}
        <ul className="nav-links desktop">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <ul className={`nav-links mobile ${menuOpen ? "open" : ""}`}>
        <div className="drawer-close" onClick={closeMenu}>
          ✕
        </div>
        {links.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path} onClick={closeMenu}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;

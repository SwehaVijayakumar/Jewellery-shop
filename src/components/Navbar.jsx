import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiHome,
  FiShoppingBag,
  FiGrid,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiSearch,
} from "react-icons/fi";
import "./Navbar.css";

const AvatarSrc = "/mnt/data/now2.jpg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 👈 Added navigation

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [cartCount, setCartCount] = useState(() => Number(localStorage.getItem("cartCount") || 0));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("cartCount", String(cartCount));
  }, [cartCount]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest(".menu-toggle")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const links = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
    { name: "Categories", path: "/categories", icon: <FiGrid /> },
    { name: "Wishlist", path: "/wishlist", icon: <FiHeart /> },
    { name: "Cart", path: "/cart", icon: <FiShoppingCart /> },
  ];

  const toggleTheme = () => setDarkMode((s) => !s);

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <NavLink to="/" className="logo">
            <span className="logo-gold">JEWELLERY</span>
            <span className="logo-dark">SHOP</span>
          </NavLink>
        </div>

        <ul className="nav-links desktop">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path}>
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-text">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button className="icon-btn">
            <FiHeart />
          </button>

          <button className="icon-btn cart">
            <FiShoppingCart />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>

          {!isLoggedIn ? (
            <button className="login-btn" onClick={() => navigate("/login")}>
              <FiUser /> Login
            </button>
          ) : (
            <div className="profile-area" ref={dropdownRef}>
              <button className="avatar-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src={AvatarSrc} alt="Profile" className="avatar-img" />
              </button>
              {dropdownOpen && (
                <ul className="profile-dropdown">
                  <li onClick={() => navigate("/profile")}>My profile</li>
                  <li onClick={() => navigate("/orders")}>Orders</li>
                  <li onClick={() => setIsLoggedIn(false)}>Logout</li>
                </ul>
              )}
            </div>
          )}

          <button className={`theme-switch ${darkMode ? "active" : ""}`} onClick={toggleTheme}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>

      {/* Drawer */}
      <div ref={menuRef}>
        <aside className={`drawer ${menuOpen ? "open" : ""}`}>
          <div className="drawer-top">
            <button className="drawer-close" onClick={() => setMenuOpen(false)}>
              <FiX />
            </button>
          </div>

          <ul className="drawer-list">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} onClick={() => setMenuOpen(false)}>
                  {link.icon} {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="drawer-bottom">
            {!isLoggedIn ? (
              <button className="drawer-login" onClick={() => { navigate("/login"); setMenuOpen(false); }}>
                <FiUser /> Login
              </button>
            ) : (
              <button className="drawer-logout" onClick={() => setIsLoggedIn(false)}>
                Logout
              </button>
            )}
          </div>
        </aside>

        <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
};

export default Navbar;

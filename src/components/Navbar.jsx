import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
} from "react-icons/fi";
import Logo from "./Logo";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const drawerRef = useRef(null);

  /* ===== Dark mode ===== */
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  /* ===== Scroll shrink ===== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Close drawer on outside click ===== */
  useEffect(() => {
    const close = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const links = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
    { name: "Categories", path: "/categories", icon: <FiGrid /> },
    { name: "Wishlist", path: "/wishlist", icon: <FiHeart /> },
    { name: "Cart", path: "/cart", icon: <FiShoppingCart /> },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          {/* Mobile hamburger */}
          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </button>

          {/* ✅ LOGO COMPONENT */}
          <Logo />
        </div>

        {/* Desktop menu */}
        <ul className="nav-links desktop">
          {links.map((l) => (
            <li key={l.name}>
              <NavLink to={l.path}>
                {l.icon} {l.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button className="login-btn" onClick={() => navigate("/login")}>
            <FiUser /> Login
          </button>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        ref={drawerRef}
        className={`drawer ${menuOpen ? "open" : ""}`}
      >
        <div className="drawer-top">
          <Logo />
          <button onClick={() => setMenuOpen(false)}>
            <FiX />
          </button>
        </div>

        <ul className="drawer-list">
          {links.map((l) => (
            <li key={l.name}>
              <NavLink
                to={l.path}
                className="drawer-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="drawer-icon">{l.icon}</span>
                {l.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="drawer-bottom">
          <button
            className="drawer-login"
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
          >
            <FiUser /> Login
          </button>

          <button
            className="drawer-theme-icon"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </aside>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;

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
  FiSearch, // FiSearch is imported but not used, kept for completeness
} from "react-icons/fi";
import "./Navbar.css";

// NOTE: This path needs to be correctly imported or defined relative to your project structure
const AvatarSrc = "/mnt/data/now2.jpg"; 

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [cartCount, setCartCount] = useState(() => Number(localStorage.getItem("cartCount") || 0));
  
  // 🔄 FIX 1: Replace isLoggedIn with a user object state
  // In a real app, this would be fetched from a global context/store
  const [user, setUser] = useState(null); 
  // Helper variable derived from user state
  const isLoggedIn = !!user; 

  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", String(darkMode)); // Added persistence for darkMode
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("cartCount", String(cartCount));
  }, [cartCount]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && !e.target.closest(".avatar-btn")) {
        setDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest(".menu-toggle")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // 🆕 NEW: Functions to simulate login/logout and set user data
  const handleLogin = () => {
    // In a REAL app, this is where you'd redirect to /login 
    // and the successful login component would call a global login function.
    
    // 💡 Simulation: Immediately set a dummy user and redirect if needed
    setUser({ name: "J. Doe", avatarSrc: AvatarSrc }); 
    navigate("/"); // Redirect to home or dashboard after 'login' simulation
    console.log('User logged in:', { name: "J. Doe" });
  };

  const handleLogout = () => {
    setUser(null); // Clear the user data
    setDropdownOpen(false);
    // In a real app, you would also clear the authentication token (e.g., from localStorage)
  };

  const links = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Shop", path: "/shop", icon: <FiShoppingBag /> },
    { name: "Categories", path: "/categories", icon: <FiGrid /> },
    { name: "Wishlist", path: "/wishlist", icon: <FiHeart /> },
    { name: "Cart", path: "/cart", icon: <FiShoppingCart /> },
  ];

  const toggleTheme = () => setDarkMode((s) => {
    localStorage.setItem("darkMode", String(!s));
    return !s;
  });

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
          {/* ... (Desktop Links remain the same) ... */}
        </ul>

        <div className="nav-controls">
          {/* ... (Wishlist and Cart buttons remain the same) ... */}
          <button className="icon-btn">
            <FiHeart />
          </button>

          <button className="icon-btn cart">
            <FiShoppingCart />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>

          {/* 🔄 FIX 2: Conditional rendering based on user state */}
          {!isLoggedIn ? (
            <button 
                className="login-btn" 
                // 💡 ACTION: Changed onClick to call the local handleLogin simulation
                onClick={handleLogin} 
            >
              <FiUser /> Login
            </button>
          ) : (
            <div className="profile-area" ref={dropdownRef}>
              <div className="user-greeting">
                 {/* 🆕 NEW: Display the user's name */}
                 Hi, **{user.name}**
              </div>
              <button className="avatar-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img src={user.avatarSrc || AvatarSrc} alt="Profile" className="avatar-img" />
              </button>
              {dropdownOpen && (
                <ul className="profile-dropdown">
                  <li onClick={() => { navigate("/profile"); setDropdownOpen(false); }}>My Profile</li>
                  <li onClick={() => { navigate("/orders"); setDropdownOpen(false); }}>Orders</li>
                  {/* 🆕 NEW: Call handleLogout function */}
                  <li onClick={handleLogout}>Logout</li> 
                </ul>
              )}
            </div>
          )}

          <button className={`theme-switch ${darkMode ? "active" : ""}`} onClick={toggleTheme}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>

      {/* Drawer (Mobile Menu) */}
      <div ref={menuRef}>
        <aside className={`drawer ${menuOpen ? "open" : ""}`}>
          {/* ... (Drawer structure remains the same) ... */}
          <div className="drawer-bottom">
            {!isLoggedIn ? (
              <button className="drawer-login" onClick={() => { handleLogin(); setMenuOpen(false); }}>
                <FiUser /> Login
              </button>
            ) : (
              // 🆕 NEW: Display the user's name in the drawer and use handleLogout
              <>
                <div className="drawer-user-info">
                   Logged in as **{user.name}**
                </div>
                <button className="drawer-logout" onClick={() => { handleLogout(); setMenuOpen(false); }}>
                  Logout
                </button>
              </>
            )}
          </div>
        </aside>

        <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
};

export default Navbar;
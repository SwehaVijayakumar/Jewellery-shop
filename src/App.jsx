import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Routes>
        {/* Default Home Route */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />

        {/* Redirect unknown URLs to Home */}
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

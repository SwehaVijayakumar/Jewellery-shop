import React, { useState } from "react";
import { Link } from "react-router-dom";
import SparkleBackground from "../components/SparkleBackground";
import "./Auth.css";
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <div className="auth-container">
      <SparkleBackground />
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to continue your sparkle ✨</p>

        <form onSubmit={handleSubmit} autoComplete="off">
          {/* hidden dummy input to fully disable browser autofill */}
          <input
            type="text"
            name="hidden"
            autoComplete="off"
            style={{ display: "none" }}
          />

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <label>Password</label>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/register" className="auth-link">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

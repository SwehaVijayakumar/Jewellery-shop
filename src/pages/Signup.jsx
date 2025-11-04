import React, { useState } from "react";
import { Link } from "react-router-dom";
import SparkleBackground from "../components/SparkleBackground";
import "./Auth.css";
import { motion } from "framer-motion";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
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
        <h2 className="auth-title">Create Your Account</h2>
        <p className="auth-subtitle">Join Vinuriya Jewels family ✨</p>

        <form onSubmit={handleSubmit} autoComplete="off">
          {/* hidden dummy input */}
          <input
            type="text"
            name="hidden"
            autoComplete="off"
            style={{ display: "none" }}
          />

          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label>Full Name</label>
          </div>

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

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;

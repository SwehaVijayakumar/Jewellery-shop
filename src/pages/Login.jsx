import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-page">
      <div className="background-shimmer"></div>

      <div className="login-container">
        <div className="login-left">
          <h1 className="brand">Vinuriya Jewels</h1>
          <p className="slogan">Where Elegance Meets Perfection ✨</p>
        </div>

        <div className="login-right">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Welcome Back</h2>
            <p>Login to continue exploring timeless beauty.</p>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="actions">
              <button type="submit" className="login-btn">Login</button>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <div className="divider">
              <span>or continue with</span>
            </div>

            <div className="social-login">
              <button className="google-btn">Google</button>
              <button className="facebook-btn">Facebook</button>
            </div>

            <p className="signup-text">
              Don’t have an account? <a href="/register">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

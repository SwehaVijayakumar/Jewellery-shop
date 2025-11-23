import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit" className="auth-btn">Login</button>

        <div className="auth-footer">
          <Link to="/forgot-password">Forgot Password?</Link>
          <p>
            No account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (email) {
      alert("Password reset link sent to your email!");
      setEmail("");
    } else {
      alert("Enter your registered Email!");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleReset}>
        <h2>Reset Password</h2>

        <input
          type="email"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="auth-btn">Send Link</button>

        <div className="auth-footer">
          <Link to="/login">← Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;

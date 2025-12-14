import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="footer-logo">
            <span className="logo-gold">JEWELLERY</span> SHOP
          </h2>

          <p className="footer-text">
            Jewellery Shop is all about elegant designs and premium collections.
            Your one-stop destination for timeless beauty.
          </p>

          <p className="footer-contact">
            <strong>Contact Us</strong><br />
            Call us on <span>8838434648</span>
          </p>

          <div className="footer-socials">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Store Location</li>
            <li>Gift Card</li>
          </ul>
        </div>

        {/* PAYMENT */}
        <div className="footer-col">
          <h3>We Accept</h3>
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
          </div>
          <small>Debit & Credit</small>
        </div>

        {/* SUBSCRIBE */}
        <div className="footer-col">
          <h3>Subscribe</h3>
          <p>Stay tuned for discounts & stories</p>

          <input
            type="email"
            placeholder="Email address"
            className="subscribe-input"
          />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Jewellery Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

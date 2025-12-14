// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import "../App.css";

const base = import.meta.env.BASE_URL;

const Home = () => {
  const categories = [
    { title: "Earams", image: base + "images/necklace.jpg" },
  
    
  ];

  const products = [
    { name: "Favorite Oxider Mixed", price: 250, image: base + "images/necklace.jpg" },
    { name: "Navapriya Cute Oxider Box", price: 300, image: base + "images/necklace.jpg", sale: true },
    { name: "Cute Necklace with White Beads", price: 350, image: base + "images/necklace.jpg" },
  ];

  return (
    <main className="home-container">
      {/* ================= VIDEO BANNER ================= */}
      <section className="video-banner">
        <video
          src={base + "videos/chain.mp4"}
          autoPlay
          loop
          muted
          playsInline
          className="home-video"
        />
        <div className="video-overlay">
          <h1>Welcome to Jewellery Shop</h1>
          <p>Explore Our Latest Collections</p>

          {/* ✅ FIX: use Link instead of <a> */}
          <Link to="/categories" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories-section">
        <h2 className="section-title">Shop By Category</h2>

        <div className="category-list">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </section>

      {/* ================= NEW ARRIVALS ================= */}
      <section className="products-section">
        <h2 className="section-title">New Arrivals</h2>

        <div className="product-list">
          {products.map((prod, idx) => (
            <ProductCard key={idx} {...prod} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

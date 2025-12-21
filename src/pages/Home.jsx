// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import NewArrivalCard from "../components/NewArrivalCard";
import "../App.css";

const base = import.meta.env.BASE_URL;

const Home = () => {
  /* ================= CATEGORIES ================= */
  const categories = [
    {
      title: "Earams",
      image: base + "images/necklace.jpg",
    },
  ];

  /* ================= NEW ARRIVALS ================= */
  const products = [
    {
      id: 1,
      name: "Sarkura",
      image: base + "images/chain2.jpg",
      price: "1,900.00",
      oldPrice: "2,500.00",
      discount: 24,
      rating: 5,
      reviews: 1,
    },
    {
      id: 2,
      name: "Tara",
      image: base + "images/chain2.jpg",
      price: "2,300.00",
      oldPrice: "2,800.00",
      discount: 18,
      rating: 5,
      reviews: 2,
    },
    {
      id: 3,
      name: "Siraka",
      image: base + "images/chain2.jpg",
      price: "910.00",
      from: true,
      rating: 0,
      reviews: 0,
    },
    {
      id: 4,
      name: "Can Can",
      image: base + "images/chain2.jpg",
      price: "1,590.00",
      oldPrice: "1,800.00",
      discount: 12,
      rating: 0,
      reviews: 0,
    },
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
          <h1>Welcome to V i n u r i y a </h1>
          <p>Explore Our Latest Collections</p>

          <Link to="/categories" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories-section">
        <h2 className="section-title">-- SHOP BY CATEGORIES --</h2>

        <div className="category-list">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </section>

      {/* ================= NEW ARRIVALS ================= */}
      <section className="products-section">
        <h2 className="section-title">-- New Arrivals --</h2>

        <div className="new-arrivals">
          {products.map((prod) => (
            <NewArrivalCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

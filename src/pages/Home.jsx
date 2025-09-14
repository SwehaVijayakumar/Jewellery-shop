// src/pages/Home.jsx
import React from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import "../App.css";

const base = import.meta.env.BASE_URL;

const Home = () => {
  const categories = [
    { title: "Earams", image: base + "images/chain2.jpg" },
    { title: "Necklaces", image: base + "images/necklace.jpg" },
    { title: "Earrings", image: base + "images/earrings.jpg" },
    { title: "Chains", image: base + "images/chains.jpg" },
  ];

  const products = [
    { name: "Favorite Oxider Mixed", price: 250, image: base + "images/pro1.jpg" },
    { name: "Navapriya Cute Oxider Box", price: 300, image: base + "images/pro2.jpg", sale: true },
    { name: "Cute Necklace with white Beads", price: 350, image: base + "images/pro3.jpg" },
  ];

  return (
    <div>
      {/* Video Banner with Overlay */}
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
          <a href="#categories" className="shop-now-btn">Shop Now</a>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="categories">
        <h2>Shop By Category</h2>
        <div className="category-list">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="product-list">
          {products.map((prod, idx) => (
            <ProductCard key={idx} {...prod} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

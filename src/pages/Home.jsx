// src/pages/Home.jsx
import React from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import "../App.css";

const base = import.meta.env.BASE_URL;

const Home = () => {
  const categories = [
    { title: "Earams", image: base + "images/chain2.jpg" },
    { title: "Necklaces", image: base + "images/necklaces.jpg" },
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
      <section className="banner">
        <img src={base + "images/chain2.jpg"} alt="Banner" />
      </section>

      <section className="categories">
        <h2>Shop By Category</h2>
        <div className="category-list">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </section>

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

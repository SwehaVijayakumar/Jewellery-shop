import React from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

import "../App.css";

import chain2 from "../images/chain2.jpg";

const Home = () => {
  const categories = [
    { title: "Earams", image: "/images/chain2.jpg" },
    { title: "Necklaces", image: "/images/necklaces.jpg" },
    { title: "Earrings", image: "/images/earrings.jpg" },
    { title: "Chains", image: "/images/chains.jpg" },
  ];

  const products = [
    { name: "Favorite Oxider Mixed", price: 250, image: "/images/pro1.jpg" },
    { name: "Navapriya Cute Oxider Box", price: 300, image: "/images/pro2.jpg", sale: true },
    { name: "Cute Necklace with white Beads", price: 350, image: "/images/pro3.jpg" },
  ];

  return (
    <div>
      {/* Banner */}
      <section className="banner">
        <img src={chain2} alt="Banner" />
      </section>

      {/* Categories */}
      <section className="categories">
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

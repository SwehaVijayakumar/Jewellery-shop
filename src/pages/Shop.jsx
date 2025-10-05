import React from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

const base = import.meta.env.BASE_URL;

const categories = [
  { title: "Earrings", image: base + "images/necklace.jpg" },
  { title: "Necklaces", image: base + "images/necklace.jpg" },
  { title: "Chains", image: base + "images/necklace.jpg" },
];

const products = [
  { name: "Oxider Mixed Earrings", price: 250, image: base + "images/necklace.jpg", sale: true },
  { name: "Cute Oxider Box", price: 300, image: base + "images/necklace.jpg" },
  { name: "White Beads Necklace", price: 350, image: base + "images/necklace.jpg", sale: true },
];

const Home = () => {
  return (
    <div>
      {/* Categories */}
      <section id="categories" className="categories">
        <h2>Shop By Category</h2>
        <div className="category-list">
          {categories.map((cat, idx) => <CategoryCard key={idx} {...cat} />)}
        </div>
      </section>

      {/* Products */}
      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="product-list">
          {products.map((prod, idx) => <ProductCard key={idx} {...prod} />)}
        </div>
      </section>
    </div>
  );
};

export default Home;

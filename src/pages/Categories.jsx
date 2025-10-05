import React from "react";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  const categories = [
    { title: "Earams", image: "../images/neckchain.jpg" },
    { title: "Necklaces", image: "/images/neckchain.jpg" },
    { title: "Earrings", image: "/images/neckchain.jpg" },
    { title: "Chains", image: "/images/neckchain.jpg" },
  ];

  return (
    <div className="page-container">
      <h2>Browse Categories</h2>
      <div className="category-list">
        {categories.map((cat, idx) => (
          <CategoryCard key={idx} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

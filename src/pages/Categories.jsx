import React from "react";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  const categories = [
    { title: "Earams", image: "/images/necklace.jpg" },
    { title: "Necklaces", image: "/images/necklace.jpg" },
    { title: "Earrings", image: "/images/necklace.jpg" },
    { title: "Chains", image: "/images/necklace.jpg" },
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

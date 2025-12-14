import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Necklaces",
      image: "/images/necklace.jpg",
      link: "/categories/necklaces",
    },
    {
      name: "Earrings",
      image: "/images/earrings.jpg",
      link: "/categories/earrings",
    },
  ];

  return (
    <section className="category-section">
      {categories.map((cat, index) => (
        <div className="category-card" key={index}>
          <img src={cat.image} alt={cat.name} />

          {/* Overlay */}
          <div className="category-overlay">
            <button
              className="category-title"
              onClick={() => navigate(cat.link)}
            >
              {cat.name}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryCard;

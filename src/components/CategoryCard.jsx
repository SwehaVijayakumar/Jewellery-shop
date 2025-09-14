import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="category-card">
      <div className="image-box">
        <img src={image} alt={title} />
      </div>
      <h3 className="category-title">{title}</h3>
    </div>
  );
};

export default CategoryCard;

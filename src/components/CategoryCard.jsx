// src/components/CategoryCard.jsx
import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ title, image, link }) {
  return (
    <Link to={link} className="category-card">
      <img src={image} alt={title} />

      <div className="category-overlay">
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default CategoryCard;

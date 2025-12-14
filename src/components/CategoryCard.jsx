import { Link } from "react-router-dom";
import categories from "../data/categories";
import "./CategoryCard.css";

function CategoryCard() {
  return (
    <section className="category-section">
      {categories.map((cat) => (
        <Link
          to={cat.link}
          className="category-card fade-in"
          key={cat.id}
        >
          <img src={cat.image} alt={cat.title} />
          <div className="category-overlay">
            <h2>{cat.title}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default CategoryCard;

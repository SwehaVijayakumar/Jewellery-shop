import { FaEye, FaHeart, FaLink, FaStar } from "react-icons/fa";
import "./NewArrivalCard.css";

function NewArrivalCard({ product }) {
  return (
    <div className="arrival-card">
      {/* Discount badge */}
      {product.discount && (
        <span className="discount-badge">-{product.discount}%</span>
      )}

      {/* Image */}
      <div className="product-img">
        <img src={product.image} alt={product.name} />

        {/* Hover icons */}
        <div className="hover-actions">
          <button><FaEye /></button>
          <button><FaLink /></button>
          <button><FaHeart /></button>
        </div>
      </div>

      {/* Info */}
      <div className="product-info">
        <h4>{product.name}</h4>

        {/* Rating */}
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < product.rating ? "filled" : ""}
            />
          ))}
          <span>({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="price">
          {product.from && <span className="from">From </span>}
          <span className="new">Rs. {product.price}</span>
          {product.oldPrice && (
            <span className="old">Rs. {product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewArrivalCard;

import { useState } from "react";
import {
  FaEye,
  FaHeart,
  FaLink,
  FaStar,
  FaRegHeart,
} from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import "./NewArrivalCard.css";

function NewArrivalCard({ product }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [rating, setRating] = useState(product.rating || 0);
  const [hover, setHover] = useState(0);

  return (
    <div className="product-card">
      {/* DISCOUNT */}
      {product.discount && (
        <span className="discount-badge">-{product.discount}%</span>
      )}

      {/* IMAGE */}
      <div className="product-img">
        <img src={product.image} alt={product.name} />

        {/* HOVER ACTIONS */}
        <div className="hover-actions">
          <button title="Quick View">
            <FaEye />
          </button>

          <button title="Share">
            <FaLink />
          </button>

          <button
            title="Wishlist"
            className={isWishlisted(product.id) ? "active" : ""}
            onClick={() => toggleWishlist(product)}
          >
            {isWishlisted(product.id) ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>

      {/* INFO */}
      <div className="product-info">
        <h4>{product.name}</h4>

        {/* ⭐ LIVE RATING */}
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={
                star <= (hover || rating) ? "filled" : "empty"
              }
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
          <span>({product.reviews || 0})</span>
        </div>

        {/* PRICE */}
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

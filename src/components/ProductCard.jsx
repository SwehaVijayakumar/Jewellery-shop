import React from "react";
import StarRating from "./StarRating";
import "./NewArrivalCard.css";

const ProductCard = ({ name, price, oldPrice, discount }) => {
  const handleRating = (value) => {
    console.log(`${name} rated ${value} stars`);
  };

  return (
    <div className="arrival-card">
      <div className="image-wrap">
        {discount && <span className="discount">-{discount}%</span>}
        <img src="/images/sample.jpg" alt={name} />
      </div>

      <h4>{name}</h4>

      {/* ⭐ LIVE STAR RATING */}
      <StarRating initialRating={4} onRate={handleRating} />

      <div className="price">
        <span className="new">Rs. {price}</span>
        {oldPrice && <span className="old">Rs. {oldPrice}</span>}
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, price, sale }) => {
  return (
    <div className="product-card">
      <div className="image-box">
        <img src={image} alt={name} />
        {sale && <span className="badge">Sale</span>}
      </div>
      <h4 className="product-name">{name}</h4>
      <p className="product-price">₹{price}</p>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ name, price, image }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={() => addToCart({ name, price, image })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

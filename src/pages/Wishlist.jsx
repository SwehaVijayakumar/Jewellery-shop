import React from "react";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const wishlistProducts = [
    { name: "Lakshmi Coin Necklace", price: 550, image: "/images/pro1.jpg" },
    { name: "Ruby Floral Earrings", price: 199, image: "/images/pro2.jpg" },
  ];

  return (
    <div className="page-container">
      <h2>Your Wishlist ❤️</h2>
      {wishlistProducts.length > 0 ? (
        <div className="product-list">
          {wishlistProducts.map((prod, idx) => (
            <ProductCard key={idx} {...prod} />
          ))}
        </div>
      ) : (
        <p>No items in wishlist yet.</p>
      )}
    </div>
  );
};

export default Wishlist;

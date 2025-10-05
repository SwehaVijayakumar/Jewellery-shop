import React from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const allProducts = [
    { name: "Golden Necklace", price: 450, image: "/images/necklace.jpg" },
    { name: "Traditional Earrings", price: 250, image: "/images/necklace.jpg" },
    { name: "Temple Haram", price: 999, image: "/images/necklace.jpg" },
    { name: "Green Beads Chain", price: 350, image: "/images/necklace.jpg" },
  ];

  return (
    <div className="page-container">
      <h2>Shop All Products</h2>
      <div className="product-list">
        {allProducts.map((prod, idx) => (
          <ProductCard key={idx} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

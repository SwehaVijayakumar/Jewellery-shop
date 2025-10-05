import React from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const allProducts = [
    { name: "Golden Necklace", price: 450, image: "/images/pro1.jpg" },
    { name: "Traditional Earrings", price: 250, image: "/images/pro2.jpg" },
    { name: "Temple Haram", price: 999, image: "/images/pro3.jpg" },
    { name: "Green Beads Chain", price: 350, image: "/images/pro4.jpg" },
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

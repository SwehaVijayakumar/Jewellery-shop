import React from "react";
import "./SparkleBackground.css";

const SparkleBackground = () => {
  return (
    <div className="sparkle-container">
      {[...Array(15)].map((_, i) => (
        <span key={i} className="sparkle"></span>
      ))}
    </div>
  );
};

export default SparkleBackground;

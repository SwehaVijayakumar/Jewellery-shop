import React, { useEffect } from "react";
import "../pages/Auth.css";


const SparkleBackground = () => {
  useEffect(() => {
    const container = document.querySelector(".sparkle-bg");

    const createSparkle = () => {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.animationDuration = 6 + Math.random() * 4 + "s";
      sparkle.style.opacity = Math.random();
      container.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 10000);
    };

    const interval = setInterval(createSparkle, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sparkle-bg">
      <div className="vinuriya-logo">V</div>
    </div>
  );
};

export default SparkleBackground;

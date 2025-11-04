import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500); // fade out after 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="gold-dust"></div>
      <h1 className="preloader-text">Vinuriya Jewels</h1>
    </div>
  );
};

export default Preloader;

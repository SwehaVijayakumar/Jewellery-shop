import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./RatingStars.css";

function RatingStars({ initialRating = 0, reviews = 0 }) {
  const [rating, setRating] = useState(initialRating);
  const [count, setCount] = useState(reviews);

  const handleRating = (value) => {
    // average calculation
    const total = rating * count + value;
    const newCount = count + 1;
    const avg = total / newCount;

    setRating(avg);
    setCount(newCount);
  };

  return (
    <div className="rating-box">
      {[1, 2, 3, 4, 5].map((num) => (
        <FaStar
          key={num}
          className={num <= Math.round(rating) ? "star filled" : "star"}
          onClick={() => handleRating(num)}
        />
      ))}
      <span className="rating-text">
        {rating.toFixed(1)} ({count})
      </span>
    </div>
  );
}

export default RatingStars;

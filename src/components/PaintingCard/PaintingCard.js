import React from "react";
import "./PaintingCard.css";

const PaintingCard = ({ id, painting, title, mainLiquor }) => {
  return (
    <div className="card">
      <img src={painting} alt={`a painting of ${title}`} className="painting" />
    </div>
  );
};

export default PaintingCard;

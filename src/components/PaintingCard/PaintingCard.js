import React from "react";
// import PropTypes from "prop-types";
import "./PaintingCard.css";

const PaintingCard = ({ id, painting, title, mainLiquor }) => {
  return (
    <div className="card">
      <img src={painting} alt={`a painting of ${title}`} className="painting" />
      <p>{title}</p>
    </div>
  );
};

export default PaintingCard;

// PaintingCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   painting: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   mainLiquor: PropTypes.string.isRequired,
// };

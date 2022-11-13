import React from "react";
import PropTypes from "prop-types";
import "./PaintingCard.css";

const PaintingCard = ({ painting, title }) => {
  return (
    <div className="card">
      <img src={painting} alt={`a painting of ${title}`} className="painting" />
      <h4 className="painting-title">{title}</h4>
    </div>
  );
};

export default PaintingCard;

PaintingCard.propTypes = {
  painting: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

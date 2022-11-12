import React from "react";
import { Link } from "react-router-dom";
import "./CocktailCard.css";
// import PropTypes from 'prop-types';

const CocktailCard = ({ drinkImage, title, id, onDeleteCocktail }) => {
  const handleDeleteCocktailClick = (id) => {
    onDeleteCocktail(id);
  };

  return (
    <section className="cocktail-card-container">
      <Link to={`/cocktails/${id}`}>
        <article className="cocktail-card">
          <div className="cocktail-image-container">
            <img className="cocktail-image" src={drinkImage} alt="drink" />
            <p className="title">{title}</p>
          </div>
        </article>
      </Link>
      <button onClick={() => handleDeleteCocktailClick(id)}>Click me</button>
    </section>
  );
};

export default CocktailCard;

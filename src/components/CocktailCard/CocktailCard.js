import React from "react";
import "./CocktailCard.css";
// import PropTypes from 'prop-types';

const CocktailCard = ({ drinkImage, title, id }) => {
  return (
    <section className="cocktail-card-container">
      <article className="cocktail-card">
        <div className="cocktail-image-container">
          <img className="cocktail-image" src={drinkImage} alt="drink" />
          <p className="title">{title}</p>
        </div>
      </article>
      {/* <button className="save-button" onClick={() => savedCocktails(id)}>
        Save
      </button> */}
    </section>
  );
};

export default CocktailCard;

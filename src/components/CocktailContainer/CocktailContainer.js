import React from "react";
import { Link } from "react-router-dom";
import "./CocktailContainer.css";

const CocktailContainer = ({ cocktail }) => {
  return (
    <section>
      <div>
        <img
          src={cocktail.cocktail_image}
          alt={`of ${cocktail.cocktail_name}`}
          className="cocktail-picture"
        />
      </div>
      <div>
        <h2>{cocktail.cocktail_name}</h2>
        <h3>Main Liquor: {cocktail.main_cocktail_liqour}</h3>
        <p>Ingredients: {cocktail.ingredients}</p>
        <p>Instructions: {cocktail.instructions}</p>
        <p>{cocktail.artist_liquor_fact}</p>
      </div>
      <Link to={`/artists/${cocktail.id}`}>
        <button>PRESS ME! I'll take you back to you work of art </button>
      </Link>
      <Link to={`/`}>
        <button>PRESS ME! I'll take you home</button>
      </Link>
    </section>
  );
};

export default CocktailContainer;

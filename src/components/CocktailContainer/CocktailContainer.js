import React from "react";
import { Link } from "react-router-dom";
import SavedCocktails from "../SavedCocktails/SavedCocktails";
import "./CocktailContainer.css";
// { useState, useEffect }

const CocktailContainer = ({ cocktail, onSaveCocktail, onDeleteCocktail }) => {
  // const [cocktailList, setCocktailList] = useState([]);

  // console.log({ cocktailList });
  const handleSaveCocktailClick = (id) => {
    onSaveCocktail(id);
  };

  const handleDeleteCocktailClick = (id) => {
    onDeleteCocktail(id);
  };
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
      <button onClick={() => handleSaveCocktailClick(cocktail.id)}>
        Save Cocktail
      </button>
      <button onClick={() => handleDeleteCocktailClick(cocktail.id)}>
        Delete Cocktail
      </button>
      <Link to={`/savedcocktails`}>
        <button>PRESS ME! Saved Cocktails</button>
      </Link>
    </section>
  );
};

export default CocktailContainer;

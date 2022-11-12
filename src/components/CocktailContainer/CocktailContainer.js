import React from "react";
import { Link } from "react-router-dom";
// import SavedCocktails from "../SavedCocktails/SavedCocktails";
import "./CocktailContainer.css";
import bookmarkAdd from "../../assets/bookmark_add.svg";
import bookmarkDelete from "../../assets/bookmark_delete.svg";

const CocktailContainer = ({
  cocktail,
  onSaveCocktail,
  onDeleteCocktail,
  savedCocktails,
}) => {
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
      {!savedCocktails.includes(cocktail.id) && (
        <button onClick={() => handleSaveCocktailClick(cocktail.id)}>
          <img src={bookmarkAdd} alt="add favorite" />
        </button>
      )}
      {savedCocktails.includes(cocktail.id) && (
        <button onClick={() => handleDeleteCocktailClick(cocktail.id)}>
          <img src={bookmarkDelete} alt="delete favorite" />
        </button>
      )}
    </section>
  );
};

export default CocktailContainer;

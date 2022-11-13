import React from "react";
import { Link } from "react-router-dom";
import CocktailCard from "../CocktailCard/CocktailCard";
import "./SavedCocktails.css";

const SavedCocktails = ({ savedCocktails, artists, onDeleteCocktail }) => {
  const savedCocktailsCont = savedCocktails.map((savedCocktailId) => {
    const artist = artists.find((artist) => artist.id === savedCocktailId);
    const { cocktail_image, cocktail_name, id } = artist;
    return (
      <CocktailCard
        key={id}
        drinkImage={cocktail_image}
        title={cocktail_name}
        id={id}
        onDeleteCocktail={onDeleteCocktail}
      />
    );
  });

  let error = savedCocktailsCont.length === 0 ? true : false;

  return (
    <div>
      {error && (
        <div className="error-container">
          <span className="error">
            You have no saved cocktails, go explore!
          </span>
        </div>
      )}
      <section className="saved-cocktail-container">
        {savedCocktailsCont}
      </section>
      <div className="saved-button-styling">
        <Link to={`/`}>
          <button className="home-from-saved">HOME</button>
        </Link>
      </div>
      {/* <button onClick={(event) => this.handleChange(event)}>Save</button> */}
    </div>
  );
};

export default SavedCocktails;

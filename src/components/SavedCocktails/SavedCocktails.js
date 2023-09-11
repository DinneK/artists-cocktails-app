import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CocktailCard from "../CocktailCard/CocktailCard";
import PropTypes from "prop-types";
import "./SavedCocktails.css";

const SavedCocktails = ({ savedCocktails, artists, onDeleteCocktail }) => {
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("drink"));
  }, []);

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
    </div>
  );
};

export default SavedCocktails;

SavedCocktails.propTypes = {
  savedCocktails: PropTypes.array.isRequired,
  artists: PropTypes.array.isRequired,
  onDeleteCocktail: PropTypes.func,
};

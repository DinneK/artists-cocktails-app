import React from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import "./SavedCocktails.css";

const SavedCocktails = ({ savedCocktails, artists, onDeleteCocktail }) => {
  console.log({ savedCocktails });

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
      {/* <button onClick={(event) => this.handleChange(event)}>Save</button> */}
    </div>
  );
};

export default SavedCocktails;

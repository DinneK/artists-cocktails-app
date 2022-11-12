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

  return (
    <div>
      {savedCocktailsCont}
      {/* <button onClick={(event) => this.handleChange(event)}>Save</button> */}
    </div>
  );
};

export default SavedCocktails;

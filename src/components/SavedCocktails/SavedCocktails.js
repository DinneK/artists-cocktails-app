import React from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import "./SavedCocktails.css";

const SavedCocktails = ({ savedCocktails, artists }) => {
  console.log({ savedCocktails });

  const savedCocktailsCont = artists.map((drink) => {
    const { cocktail_image, cocktail_name, id } = drink;
    return (
      <CocktailCard
        key={id}
        drinkImage={cocktail_image}
        title={cocktail_name}
        id={id}
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

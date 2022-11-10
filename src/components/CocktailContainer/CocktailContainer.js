import React, { Component } from "react";
import "./CocktailContainer.css";

const CocktailContainer = ({ artists }) => {
  const artist = artists[0];
  return (
    <section>
      <div>
        <img
          src={artist.cocktail_image}
          alt={`a picture of ${artist.cocktail_name}`}
          className="cocktail-picture"
        />
      </div>
      <div>
        <h2>{artist.cocktail_name}</h2>
        <h3>Main Liquor: {artist.main_cocktail_liqour}</h3>
        <p>Ingredients: {artist.ingredients}</p>
        <p>Instructions: {artist.instructions}</p>
        <p>{artist.artist_liquor_fact}</p>
      </div>
    </section>
  );
};

export default CocktailContainer;

import React from "react";
import PaintingCard from "../PaintingCard/PaintingCard";
import "./PaintingsContainer.css";

const PaintingsContainer = ({ artists }) => {
  const paintingCards = artists.map((artist) => {
    return (
      <PaintingCard
        key={artist.id}
        id={artist.id}
        painting={artist.painting_image}
        title={artist.painting_title}
        mainLiquor={artist.main_cocktail_liqour}
      />
    );
  });

  return <div className="paintings-container">{paintingCards}</div>;
};

export default PaintingsContainer;

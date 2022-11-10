import React from "react";
import PaintingCard from "../PaintingCard/PaintingCard";
import { Link } from "react-router-dom";
import "./PaintingsContainer.css";

const PaintingsContainer = ({ artists }) => {
  const paintingCards = artists.map((artist) => {
    return (
      <Link to={`/artists/${artist.id}`} key={artist.id}>
        <PaintingCard
          // key={artist.id}
          id={artist.id}
          painting={artist.painting_image}
          title={artist.painting_title}
          mainLiquor={artist.main_cocktail_liqour}
        />
      </Link>
    );
  });

  return <div className="paintings-container">{paintingCards}</div>;
};

export default PaintingsContainer;

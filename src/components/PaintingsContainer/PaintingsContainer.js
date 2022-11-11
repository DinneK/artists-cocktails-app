import React from "react";
import PaintingCard from "../PaintingCard/PaintingCard";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./PaintingsContainer.css";

const PaintingsContainer = ({ artists, searchByTitle }) => {
  let paintingCards;

  if (!searchByTitle) {
    paintingCards = artists.map((artist) => {
      return (
        <Link to={`/artists/${artist.id}`} key={artist.id}>
          <PaintingCard
            id={artist.id}
            painting={artist.painting_image}
            title={artist.painting_title}
            mainLiquor={artist.main_cocktail_liqour}
          />
        </Link>
      );
    });
  } else {
    paintingCards = artists.reduce((acc, artist) => {
      if (artist.title.toLowerCase().includes(searchByTitle.toLowerCase())) {
        acc.push(
          <Link to={`/artists/${artist.id}`} key={artist.id}>
            <PaintingCard
              id={artist.id}
              painting={artist.painting_image}
              title={artist.painting_title}
              mainLiquor={artist.main_cocktail_liqour}
            />
          </Link>
        );
      }
      return acc;
    }, []);
  }

  return <div className="paintings-container">{paintingCards}</div>;
};

export default PaintingsContainer;

// PaintingsContainer.propTypes = {
//   id: PropTypes.number.isRequired,
//   painting: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   mainLiquor: PropTypes.string.isRequired,
// };

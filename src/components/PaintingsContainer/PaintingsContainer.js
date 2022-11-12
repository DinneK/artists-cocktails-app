import React from "react";
import PaintingCard from "../PaintingCard/PaintingCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PaintingsContainer.css";

const PaintingsContainer = ({
  artists,
  searchByTitle,
  searchByLiquor,
  loading,
}) => {
  let paintingCards;

  if (searchByTitle && !searchByLiquor) {
    paintingCards = artists.reduce((acc, artist) => {
      if (
        artist.painting_title
          .toLowerCase()
          .includes(searchByTitle.toLowerCase())
      ) {
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
  } else if (searchByLiquor && !searchByTitle) {
    paintingCards = artists.reduce((acc, artist) => {
      if (
        artist.main_cocktail_liqour
          .toLowerCase()
          .includes(searchByLiquor.toLowerCase())
      ) {
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
  } else {
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
  }

  let error = paintingCards.length === 0 ? true : false;

  if (loading && error) {
    error = false;
  }

  return (
    <div className="paintings-container">
      {error && (
        <div className="error-container">
          <span className="error">
            Sorry, that work doesn't exist! Try again.
          </span>
        </div>
      )}
      <section className="paintings-container">{paintingCards}</section>
    </div>
  );
};

export default PaintingsContainer;

PaintingsContainer.propTypes = {
  artists: PropTypes.array.isRequired,
  searchByTitle: PropTypes.string.isRequired,
  searchByLiquor: PropTypes.string.isRequired,
};

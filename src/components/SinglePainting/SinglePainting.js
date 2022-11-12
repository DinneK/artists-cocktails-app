import React from "react";
import { Link } from "react-router-dom";
import "./SinglePainting.css";

const SinglePainting = ({
  artist,
  clearSearchByTitle,
  clearSearchByLiquor,
}) => {
  const clearHandler = () => {
    clearSearchByTitle();
    clearSearchByLiquor();
  };

  return (
    <section className="single-painting-container">
      <div className="single-painting-box">
        <div className="single-painting-img-box">
          <img
            src={artist.painting_image}
            alt={`a painting of ${artist.painting_title}`}
            className="painting-in-single"
          />
        </div>
        <div className="painting-description">
          <div className="inner-painting-description">
            <h2 className="single-painting-title">{artist.painting_title}</h2>
            <p className="single-painting-desc">
              Year Created: {artist.painting_year}
            </p>
            <p className="single-painting-desc">Style: {artist.style}</p>
            <h3 className="single-painting-artist">{artist.artist_name}</h3>
            <p className="single-painting-desc">{artist.artist_fact}</p>
            <p className="single-painting-desc">Born: {artist.born}</p>
            <p className="single-painting-desc">Died: {artist.died}</p>
          </div>
        </div>
      </div>
      <div className="single-painting-button-style">
        <Link to={`/cocktails/${artist.id}`}>
          <button className="discover">Discover a Cocktail</button>
        </Link>
        <Link to={`/`}>
          <button className="home" onClick={() => clearHandler()}>
            HOME
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SinglePainting;

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
    <section>
      <div>
        <img
          src={artist.painting_image}
          alt={`a painting of ${artist.painting_title}`}
          className="painting"
        />
      </div>
      <div>
        <h2>{artist.painting_title}</h2>
        <p>Year Created: {artist.painting_year}</p>
        <p>Style: {artist.style}</p>
        <h3>{artist.artist_name}</h3>
        <p>{artist.artist_fact}</p>
        <p>Born: {artist.born}</p>
        <p>Died: {artist.died}</p>
      </div>
      <Link to={`/cocktails/${artist.id}`}>
        <button>PRESS ME! I'm a cocktail</button>
      </Link>
      <Link to={`/`}>
        <button onClick={() => clearHandler()}>
          PRESS ME! I'll take you home
        </button>
      </Link>
    </section>
  );
};

export default SinglePainting;

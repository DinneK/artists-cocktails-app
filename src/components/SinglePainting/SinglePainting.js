import React from "react";
import "./SinglePainting.css";

const SinglePainting = ({ artist }) => {
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
      <div>
        <button>PRESS ME!</button>
      </div>
    </section>
  );
};

export default SinglePainting;

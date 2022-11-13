import React from "react";
import { Link } from "react-router-dom";
import "./CocktailCard.css";
import bookmarkDelete from "../../assets/bookmark_delete.svg";
import PropTypes from "prop-types";

const CocktailCard = ({ drinkImage, title, id, onDeleteCocktail }) => {
  const handleDeleteCocktailClick = (id) => {
    onDeleteCocktail(id);
  };

  return (
    <section className="saved-cocktail-card-container">
      <Link to={`/cocktails/${id}`}>
        <article className="cocktail-card">
          <div className="cocktail-image-container">
            <img className="cocktail-image" src={drinkImage} alt="drink" />
            <p className="cocktail-title-card">{title}</p>
          </div>
        </article>
      </Link>
      <button className="save" onClick={() => handleDeleteCocktailClick(id)}>
        <img className="save-logo" src={bookmarkDelete} alt="delete favorite" />
      </button>
    </section>
  );
};

export default CocktailCard;

CocktailCard.propTypes = {
  drinkImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteCocktail: PropTypes.func,
};

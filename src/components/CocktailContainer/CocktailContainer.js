import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CocktailContainer.css";
import bookmarkAdd from "../../assets/bookmark_add.svg";
import bookmarkDelete from "../../assets/bookmark_delete.svg";
import PropTypes from "prop-types";

const CocktailContainer = ({
  cocktail,
  // onSaveCocktail,
  // onDeleteCocktail,
  // savedCocktails,
}) => {
  const { cocktail: cocktailId } = useParams();
  const [drink, setDrink] = useState(() => {
    const items = JSON.parse(localStorage.getItem("drink"));
    return items
      ? items.find((item) => item.id === parseInt(cocktailId))
      : null;
  });

  useEffect(() => {
    if (drink) {
      const item = JSON.parse(localStorage.getItem("drink"));
      const itemValue = item ? [...item, drink] : [drink];
      localStorage.setItem("drink", JSON.stringify(itemValue));
    }
  }, [drink]);

  const handleSaveCocktailClick = (cocktail) => {
    // onSaveCocktail(cocktail.id);
    setDrink(cocktail);
  };

  const handleDeleteCocktailClick = () => {
    /*
    1.) Get the drinks from the local storage
    2.).removeItem()
   */
    // onDeleteCocktail(id);
    // const savedItems = JSON.parse(localStorage.getItem("drink"));
    // const leftItems = savedItems.filter((savedItem) => {
    //   return savedItem.id === cocktail;
    // });
    // return localStorage.removeItem("drink", JSON.stringify(leftItems));
    // setDrink(null);
  };
  return (
    <section className="single-cocktail-container">
      <div className="inner-single-cocktail-container">
        <div className="outer-cocktail-img-container">
          <div className="inner-cocktail-img-container">
            <img
              src={cocktail.cocktail_image}
              alt={`of ${cocktail.cocktail_name}`}
              className="single-cocktail-picture"
            />
          </div>
        </div>
        <div className="cocktail-description">
          <div className="inner-cocktail-description">
            <h2 className="single-cocktail-title">{cocktail.cocktail_name}</h2>
            <h3 className="single-cocktail-liquor">
              Main Liquor: {cocktail.main_cocktail_liqour}
            </h3>
            <p className="single-cocktail-desc">
              Ingredients: {cocktail.ingredients}
            </p>
            <p className="single-cocktail-desc">
              Instructions: {cocktail.instructions}
            </p>
            <p className="single-cocktail-desc">
              {cocktail.artist_liquor_fact}
            </p>
          </div>
        </div>
      </div>
      <div className="cocktail-button-styling">
        <Link to={`/artists/${cocktail.id}`}>
          <button className="back">BACK</button>
        </Link>
        <Link to={`/`}>
          <button className="home-from-cocktail">HOME</button>
        </Link>
        {!drink && (
          <button
            className="save"
            onClick={() => handleSaveCocktailClick(cocktail)}
          >
            <img className="save-logo" src={bookmarkAdd} alt="add favorite" />
          </button>
        )}
        {drink && (
          <button
            className="save"
            onClick={() => handleDeleteCocktailClick(cocktail.id)}
          >
            <img
              className="save-logo"
              src={bookmarkDelete}
              alt="delete favorite"
            />
          </button>
        )}
      </div>
    </section>
  );
};

export default CocktailContainer;

CocktailContainer.propTypes = {
  cocktail: PropTypes.object,
  onSaveCocktail: PropTypes.func,
  onDeleteCocktail: PropTypes.func,
  savedCocktails: PropTypes.array,
};

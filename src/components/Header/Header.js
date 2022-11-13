import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Header.css";

function Header() {
  const params = useParams();
  console.log({ params });
  return (
    <div className="header-container">
      <h1>The Art of the Cocktail</h1>
      <Link to={"/savedcocktails"}>
        <button className="saved-cocktails-button">Saved Cocktails</button>
      </Link>
    </div>
  );
}

export default Header;

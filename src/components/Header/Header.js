import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <h1>The Art of the Cocktail</h1>
      <Link to={`/savedcocktails`}>
        {/* <div class="button-box"> */}
        <button className="saved-cocktails-button">Saved Cocktails</button>
        {/* </div> */}
      </Link>
    </div>
  );
}

export default Header;

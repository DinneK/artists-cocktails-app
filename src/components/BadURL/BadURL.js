import React from "react";
import { Link } from "react-router-dom";
import "./BadURL.css";

function BadURL() {
  return (
    <div className="error-container">
      <span className="error">
        Oops! Looks like that isn't a valid URL. Please try again.
      </span>
      <Link to={`/`}>
        <button className="home-from-saved">HOME</button>
      </Link>
    </div>
  );
}

export default BadURL;

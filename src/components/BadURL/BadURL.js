import React from "react";
import "./BadURL.css";

function BadURL(props) {
  return (
    <div className="error-container">
      <span className="error">
        Oops! Looks like that isn't a valid URL. Please try again.
      </span>
    </div>
  );
}

export default BadURL;

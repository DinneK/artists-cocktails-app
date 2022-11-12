import React from "react";
import githubLogo from "../../assets/GitHub-Logo.svg";
import linkedinLogo from "../../assets/LinkedIn-Logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="name-container">
        <h4>Dinne Kopelevich</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/dinne-kopelevich-174584a/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/DinneK">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

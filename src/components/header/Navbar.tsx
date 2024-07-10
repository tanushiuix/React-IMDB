import React from "react";
import { Link } from "react-router-dom";
import { logo_Url, github_Url } from "../../utils/constants";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <h2 className="logo">React IMDB</h2>
        </Link>
      </div>
      <div className="navbar_links">
        <Link to="/">
          <img src={logo_Url} alt="Logo" className="logo_url" />
        </Link>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_Url} alt="GitHub" className="github_url" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

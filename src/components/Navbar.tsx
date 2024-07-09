import React from "react";
import { github_url, logo_url } from "../utils/Common";
import { Link } from "react-router-dom";

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
          <img src={logo_url} alt="Logo" className="logo_url" />
        </Link>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_url} alt="GitHub" className="github_url" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
          <li >
            <Link to="/home" className="home-link">Home Page</Link>
          </li>
        <li>
          <Link to="/"  className="index-link">Index Page</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

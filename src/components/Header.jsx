import React from "react";
import { Link } from "react-router-dom";
import "../scss/header.scss";
function Header() {
  return (
    <>
      <header>
        <nav className="container">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>Business</li>
            </Link>
            <Link to="/">
              <li>Entertainment</li>
            </Link>
            <Link to="/">
              <li>General</li>
            </Link>
            <Link to="/">
              <li>Health</li>
            </Link>
            <Link to="/">
              <li>Science</li>
            </Link>
            <Link to="/">
              <li>Sports</li>
            </Link>
            <Link to="/">
              <li>Technology</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

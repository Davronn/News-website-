import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/detelis">
        <p>Detelis</p>
      </Link>
    </>
  );
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <p>
        Rental<span>Car</span>
      </p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
      </nav>
    </header>
  );
};

export default Header;

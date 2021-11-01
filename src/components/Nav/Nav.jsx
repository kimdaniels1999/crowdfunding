import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Categories">Categories</Link>
      <Link to="/HowItWorks">How It Works</Link>
      <Link to="/SignIn">Sign In</Link>
      <Link to="/StartAProject"> Start A Project </Link>
    </nav>
  );
};

export default Navbar;

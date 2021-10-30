import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">LoginPage</Link>
      <Link to="/CreateProjectForm">Create Project Page</Link>
    </nav>
  );
}

export default Nav;

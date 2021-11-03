import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("token")
  );

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <div>
          <Link to="/Categories">Categories</Link>
          <Link to="/HowItWorks">How It Works</Link>
          <Link to="/SignIn">Sign In</Link>
          <Link to="/StartAProject"> Start A Project </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

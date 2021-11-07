import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("token")
  );

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <nav
      style={{
        height: "100px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/Categories">Categories</Link>
      <Link to="/HowItWorks">How It Works</Link>
      <Link to="/StartAProject"> Start A Project </Link>
      {isLoggedIn ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <div className="signin">
          <Link to="/SignIn">Sign In</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

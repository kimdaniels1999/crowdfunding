import React from "react";
// import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/Categories" activeStyle>
            Categories
          </NavLink>
          <NavLink to="/ProjectPage" activeStyle>
            Project Page
          </NavLink>
          <NavLink to="/HowItWorks" activeStyle>
            How It Works
          </NavLink>
          <NavLink to="/SignIn" activeStyle>
            Sign In
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/StartAProject"> Start A Project </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

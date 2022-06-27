import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const currentLocation = useLocation().pathname;

  function homeStyleNav() {
    return (
      <NavLink to="/employees-list" className="nav__employeesLink">
        View Current Employees
      </NavLink>
    );
  }

  function otherPageStyleNav() {
    return <p className="nav__information">Click Logo to return Home</p>;
  }

  return (
    <div className="header">
      <NavLink to="/" className="header__homeLink homeLink">
        <img
          src="../img/logoEnterprise.png"
          alt="logo"
          className="homeLink__logo"
        />
      </NavLink>
      <h1 className="header__title">Hrnet</h1>
      <nav className="header__nav nav">
        {currentLocation !== "/" ? otherPageStyleNav() : homeStyleNav()}
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
        <NavLink to="/Employees-list" className="nav__employeesLink">
          View Current Employees
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

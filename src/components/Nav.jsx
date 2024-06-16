import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
export const Nav = () => {
  const nav = ["tours", "merch", "music"];
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        {nav.map((el) => {
          return (
            <li key={el}>
              <NavLink to={el}>{el}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

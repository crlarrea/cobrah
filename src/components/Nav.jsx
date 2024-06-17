import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
export const Nav = () => {
  const nav = ["tours", "merch", "music", "about", "gallery"];
  const [selection, setSelection] = useState(null);
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        {nav.map((el) => {
          return (
            <li
              key={el}
              onClick={() => {
                setSelection(el);
              }}
            >
              <NavLink
                to={el}
                className={el === selection ? "active" : ""}
              >
                {el}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

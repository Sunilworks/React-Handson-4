import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function LinkCompo() {
  return (
    <>
    <nav className="main-nav">
      <div className="Nav">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/student">STUDENT</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
      </nav>
      </>
  );
}

export default LinkCompo;

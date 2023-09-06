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
            <NavLink style={({isActive}) =>({color: isActive ? "green" : "darkmagenta"})} to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) =>({color: isActive ? "green" : "darkmagenta"})} to="/student">STUDENT</NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) =>({color: isActive ? "green" : "darkmagenta"})} to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
      </nav>
      </>
  );
}

export default LinkCompo;

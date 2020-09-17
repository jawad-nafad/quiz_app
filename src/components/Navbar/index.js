/*This is navigation bar. Re-usable to anywhere in the application */
import React, {useState} from "react";
import './style.css';
import {NavLink} from "react-router-dom";

const Navbar = props=>{
    return(
      <div className="navbar">
          <ul className="navbarMenu">
              <li><NavLink to={"theory"}>Theory</NavLink> </li>
              <li><NavLink to={"quiz"}>Quiz</NavLink> </li>
          </ul>
      </div>
    );
};
export default Navbar;

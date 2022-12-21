import React from "react";
import { NavLink } from "react-router-dom";
import "./Navegacion.css"

const Navegacion = () => {
  return (
    <ul className={"navlink-container"}>
      <li>
        <NavLink className={"navlink   "} to="/">Home</NavLink>
      </li>
      
      
      <li>
      <NavLink className={"navlink"} to="/checkout">CheckOut </NavLink>
      </li>
      
      
      <li>
      <NavLink  className={"navlink"} to="/cart">Cart</NavLink>
      </li>
    </ul>
  );
};

export default Navegacion;

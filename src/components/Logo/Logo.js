import React from "react";
import { NavLink } from "react-router-dom";
const logo = () => {
  return (
    <NavLink to="/" activeClassName="link">
      <img width="70px" height="70px" src="../../logo.png" alt="StepChef" />
    </NavLink>
  );
};
export default logo;

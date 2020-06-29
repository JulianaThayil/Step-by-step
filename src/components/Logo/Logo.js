import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Logo.module.css";
const logo = () => {
  return (
    <div className={classes.container}> 
    <NavLink to="/" activeClassName="link">
      <img width="70px" height="70px" src="../../logo.png" alt="StepChef" />
    </NavLink>
    </div>
  );
};
export default logo;

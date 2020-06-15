import React from "react";
import classes from "./Logo.module.css";
import { NavLink } from "react-router-dom";
const logo = () => {
  return (
    <NavLink to="/" activeClassName="link">
      <div className={classes.logo}>
        <div className={classes.container}>
         <img width="70px" height="70px" src="../../logo.png" alt="StepChef"/>
        </div>
      </div>
    </NavLink>
  );
};
export default logo;

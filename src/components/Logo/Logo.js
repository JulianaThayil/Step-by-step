import React from "react";
import classes from "./Logo.module.css";
import { NavLink } from "react-router-dom";
const logo = () => {
  return (
    <NavLink to="/" activeClassName="link">
      <div className={classes.logo}>
        <div className={classes.container}>
         <img width="30px" height="30px" src="../../logo.png"/>
        </div>
      </div>
    </NavLink>
  );
};
export default logo;

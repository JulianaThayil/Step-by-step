import React from "react";
import classes from "./Logo.module.css";
import { NavLink } from "react-router-dom";
const logo = () => {
  return (
    <NavLink to="/" activeClassName="link">
      <div className={classes.logo}>
        <div className={classes.container}>
          <div className={classes.heart}>
            <div className={classes.square1}></div>
            <div className={classes.circle1}></div>
            <div className={classes.circle2}></div>
          </div>
          <div className={classes.spoon}>
            <div className={classes.stick}></div>
            <div className={classes.circle3}></div>
          </div>
          <div className={classes.fork}>
            <div className={classes.stick2}></div>
            <div className={classes.circle4}></div>
            <div className={classes.square2}></div>
            <div className={classes.square3}></div>
          </div>
          <div className={classes.knife}>
            <div className={classes.stick3}></div>
            <div className={classes.square4}></div>
            <div className={classes.circle5}></div>
          </div>
          <div className={classes.steps}>
            <div className={classes.square5}> </div>
            <div className={classes.square6}></div>
            <div className={classes.square7}> </div>
          </div>
          <div className={classes.name}>
            <div className={classes.name1}>STEP</div>
            <div className={classes.name2}>BY</div>
            <div className={classes.name3}>STEP</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
export default logo;

import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import {NavLink } from "react-router-dom";
import Profile from "./ProfileIcon";
import Notifications from "./Notifications";
import PostAddIcon from "@material-ui/icons/PostAdd";
//import classes from "../../index.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";

//Mui
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  add:{
    color: 'white',
    '&:hover': {
      color:'white',
  },
  },
  bttn:{
    color: 'white',
    '&:hover': {
      color: 'white',
      textDecoration:'none',
  },
  },
  outline:{
    '&:focus': {
      outline:'none',
  },
  }
}));

function Iconsbar(props){
  const classes = useStyles();
  const {
    user: { authenticated, loading },
  } = props;

  let markup = authenticated ? (
    <Fragment>
      <NavLink className={classes.add} to="/addrecipe">
        <Tooltip placement="top" title="Add Recipe">
          <PostAddIcon />
        </Tooltip>
      </NavLink>

      <Notifications> </Notifications>

      <Profile> </Profile>
    </Fragment>
  ) : (
    <Fragment>
      <NavLink className={classes.bttn} to="/login">
        {" "}
        <Button className={classes.outline} color="inherit">Login</Button>{" "}
      </NavLink>
      <NavLink className={classes.bttn} to="/signup">
        <Button className={classes.outline} color="inherit">Register</Button>{" "}
      </NavLink>
    </Fragment>
  );

  return <div style={{ display: "flex" }}>{markup}</div>;

}

Iconsbar.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Iconsbar);

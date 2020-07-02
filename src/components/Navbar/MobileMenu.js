import React from "react";
import { NavLink } from "react-router-dom";

//MUI
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

//icons
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ArtTrackIcon from "@material-ui/icons/ArtTrack"; //feed
import PersonIcon from "@material-ui/icons/Person";
import PostAddIcon from "@material-ui/icons/PostAdd";

import PropTypes from "prop-types";
//redux
import { logoutUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  popover: {
    paddingRight: "5px",
    display: "flex",
    textDecoration: "none",
  },
  nav: {
    color: "#2F3640",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function MobileMenu(props) {
  const classes = useStyles();

  const handleLogout = () => {
    props.logoutUser();
  };

  const {
    user: {
      authenticated,
      credentials: { handle },
    },
  } = props;

  let markup = authenticated ? (
    <div>
      <NavLink
        onClick={props.handleMobileMenuClose}
        activeClassName={classes.nav}
        to="/"
      >
        <MenuItem>
          <div style={{ paddingTop: "1vh" }} className={classes.popover}>
            <ArtTrackIcon />
            <p style={{ paddingLeft: "10px" }}> Feed </p>
          </div>
        </MenuItem>
      </NavLink>

      <NavLink
        onClick={props.handleMobileMenuClose}
        activeClassName={classes.nav}
        className={classes.nav}
        to={`/${handle}`}
      >
        <MenuItem>
          <div className={classes.popover}>
            <PostAddIcon /> <p style={{ paddingLeft: "10px" }}>Profile </p>
          </div>
        </MenuItem>
      </NavLink>

      <NavLink
        onClick={props.handleMobileMenuClose}
        activeClassName={classes.nav}
        className={classes.nav}
        to="/addrecipe"
      >
        <MenuItem>
          <div className={classes.popover}>
            <PersonIcon />{" "}
            <p style={{ paddingLeft: "10px" }}>Add new Recipe </p>
          </div>
        </MenuItem>
      </NavLink>

      <NavLink
        activeClassName={classes.nav}
        className={classes.nav}
        to="/login"
      >
        <MenuItem onClick={handleLogout}>
          <div className={classes.popover}>
            <PowerSettingsNewIcon />
            <p style={{ paddingLeft: "10px" }}>Logout </p>
          </div>
        </MenuItem>
      </NavLink>
    </div>
  ) : (
    <div>
      <MenuItem>
        {" "}
        <NavLink className={classes.nav} onClick={props.handleMobileMenuClose} to="/login">
          {" "}
          Login{" "}
        </NavLink>{" "}
      </MenuItem>
      <MenuItem>
        <NavLink className={classes.nav} onClick={props.handleMobileMenuClose} to="/signup">
          Register
        </NavLink>{" "}
      </MenuItem>
    </div>
  );

  return <div style={{ display: "flex" }}>{markup}</div>;
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { logoutUser };

MobileMenu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  handleMobileMenuClose: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(MobileMenu);

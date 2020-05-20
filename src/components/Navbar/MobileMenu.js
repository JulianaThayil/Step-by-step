import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from './Nav.module.css'

//MUI
import MenuItem from "@material-ui/core/MenuItem";

//icons
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ArtTrackIcon from "@material-ui/icons/ArtTrack"; //feed
import PersonIcon from "@material-ui/icons/Person";
import PostAddIcon from "@material-ui/icons/PostAdd";

import PropTypes from "prop-types";
//redux
import { logoutUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";

class Iconsbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    let markup = authenticated ? (
      <div>
        <NavLink activeClassName={classes.nav} to="/">
          <MenuItem>
            <div style={{paddingTop:'1vh'}} className={classes.popover}>
              <ArtTrackIcon /><p style={{paddingLeft:'10px'}}>  Feed </p>
            </div>
          </MenuItem>
          </NavLink>

          <NavLink activeClassName={classes.nav} className={classes.nav} to={`/${handle}`}>
          <MenuItem>
            <div className={classes.popover}>
            <PostAddIcon /> <p style={{paddingLeft:'10px'}}>Profile </p>
            </div>
          </MenuItem>
          </NavLink>

          <NavLink activeClassName={classes.nav} className={classes.nav} to="/addrecipe">
          <MenuItem>
            <div className={classes.popover}>
              <PersonIcon /> <p style={{paddingLeft:'10px'}}>Add new Recipe </p>
            </div>
          </MenuItem>
          </NavLink>

          <NavLink activeClassName={classes.nav} className={classes.nav} to="/user/settings">
          <MenuItem>
            <div className={classes.popover}>
              <SettingsIcon /> <p style={{paddingLeft:'10px'}}> Settings</p>
            </div>
          </MenuItem>
          </NavLink>

          <NavLink  activeClassName={classes.nav} className={classes.nav} to="/login">
          <MenuItem onClick={this.handleLogout}>
            <div className={classes.popover}>
              <PowerSettingsNewIcon /><p style={{paddingLeft:'10px'}}>Logout </p> 
            </div>
          </MenuItem>
          </NavLink>
      </div>
    ) : (
      <div>
        <MenuItem>
          {" "}
          <NavLink to="/login"> Login </NavLink>{" "}
        </MenuItem>
        <MenuItem>
          <NavLink to="/signup">Register</NavLink>{" "}
        </MenuItem>
      </div>
    );

    return <div style={{ display: "flex" }}>{markup}</div>;
  }
  
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { logoutUser };

Iconsbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Iconsbar);

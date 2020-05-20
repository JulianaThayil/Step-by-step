import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
//MUI
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";

//icons
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ArtTrackIcon from "@material-ui/icons/ArtTrack"; //feed
import PersonIcon from "@material-ui/icons/Person";
import MoreIcon from "@material-ui/icons/MoreVert";


//redux
import { logoutUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";

class ProfileIcon extends Component {
  state = {
    anchorEl: null,
  };
  handleOpen = (event) => {
    this.setState({ anchorEl: event.target });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const anchorEl = this.state.anchorEl;
    const {
      user: {
        credentials: { handle },
      },
    } = this.props;

    return (
      <Fragment>
        <div style={{ width: "15px", paddingLeft: "2%" }}> </div>
        <Tooltip
          placement="top"
          title="Menu"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleOpen}
        >
          <MoreIcon />
        </Tooltip>

        <Popover
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          onEntered={this.onMenuOpened}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
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
              <PersonIcon /> <p style={{paddingLeft:'10px'}}>Profile </p>
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

        </Popover>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { logoutUser };

ProfileIcon.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(ProfileIcon);

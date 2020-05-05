import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

//MUI
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";

//icons
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ArtTrackIcon from "@material-ui/icons/ArtTrack"; //feed
import PersonIcon from "@material-ui/icons/Person";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
          title="Profile"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleOpen}
        >
          <AccountCircle />
        </Tooltip>

        <Popover
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          onEntered={this.onMenuOpened}
          style={{ marginTop: "1vh" }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>
            {" "}
            <ArtTrackIcon /> <NavLink to="/"> Feed </NavLink>{" "}
          </MenuItem>
          <MenuItem>
            <PersonIcon /> <NavLink to={`/${handle}`}>Profile </NavLink>{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <SettingsIcon /> <NavLink to="/user/settings">
              {" "}
              Settings{" "}
            </NavLink>{" "}
          </MenuItem>
          <MenuItem onClick={this.handleLogout}>
            {" "}
            <PowerSettingsNewIcon /> <NavLink to="/login">Logout </NavLink>{" "}
          </MenuItem>
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

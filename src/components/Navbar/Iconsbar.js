import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Link, NavLink } from "react-router-dom";
import Profile from "./ProfileIcon";
import Notifications from "./Notifications";
import PostAddIcon from "@material-ui/icons/PostAdd";
import classes from "../../index.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";

class Iconsbar extends Component {
  render() {
    const {
      user: { authenticated, loading },
    } = this.props;

    let markup = authenticated ? (
      <Fragment>
        <NavLink class="add" activeClassName="add" to="/addrecipe">
          <Tooltip placement="top" title="Add Recipe">
            <PostAddIcon />
          </Tooltip>
        </NavLink>

        <Notifications> </Notifications>

        <Profile> </Profile>
      </Fragment>
    ) : (
      <Fragment>
        <NavLink class="bttn" activeClassName="bttn" to="/login">
          {" "}
          <Button color="inherit">Login</Button>{" "}
        </NavLink>
        <NavLink class="bttn" activeClassName="bttn" to="/signup">
          <Button color="inherit">Register</Button>{" "}
        </NavLink>
      </Fragment>
    );

    return <div style={{ display: "flex" }}>{markup}</div>;
  }
}
Iconsbar.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Iconsbar);

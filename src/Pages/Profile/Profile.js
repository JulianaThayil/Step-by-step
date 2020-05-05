import React, { Component } from "react";
import Navbar from "../../components/Navbar/Nav";
import PropTypes from "prop-types";
import classes from "./Profiles.module.css";
//pages
import MyProfile from "./MyProfile";
import StaticProfile from "./StaticProfile";

//redux
import { connect } from "react-redux";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userHandle: "",
      isnull: true,
    };
  }
  componentDidMount() {
    const userHandle = this.props.match.params.handle;
    this.setState({ userHandle: userHandle, isnull: false });
  }

  render() {
    const {
      user: {
        authenticated,
        credentials: { handle },
      },
      UI: { loading },
    } = this.props;

    const profileMarkup = !loading ? (
      !this.state.isnull && this.state.userHandle === handle ? (
        <MyProfile handle={`${handle}`}> </MyProfile>
      ) : (
        <StaticProfile handle={this.props.match.params.handle}> </StaticProfile>
      )
    ) : (
      <p> loading.... </p>
    );

    return (
      <div>
        <Navbar> </Navbar>
        <br />
        <div>{profileMarkup}</div>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  userHandle: PropTypes.string.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps)(Profile);

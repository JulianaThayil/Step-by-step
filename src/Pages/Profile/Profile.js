import React, { Component } from "react";
import PropTypes from "prop-types";
//pages
import MyProfile from "./MyProfile";
import StaticProfile from "./StaticProfile";

//redux
import { connect } from "react-redux";

//mui
import CircularProgress from "@material-ui/core/CircularProgress";

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
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <CircularProgress color="secondary"> </CircularProgress>
    </div>
    );

    return (

        <div>{profileMarkup}</div>
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

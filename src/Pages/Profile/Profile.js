import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//pages
import MyProfile from "./MyProfile";
import StaticProfile from "./StaticProfile";

//redux
import { connect } from "react-redux";

//mui
import CircularProgress from "@material-ui/core/CircularProgress";

function Profile(props) {
  const [profileState, setProfileState] = useState({
    userHandle: "",
    isnull: true,
  });

  useEffect(() => {
    const userHandle = props.match.params.handle;
    setProfileState({ userHandle: userHandle, isnull: false });
    console.log("Hi");
  }, []);

  const {
    user: {
      credentials: { handle },
    },
    UI: { loading },
  } = props;

  const profileMarkup = !loading ? (
    !profileState.isnull && profileState.userHandle === handle ? (
      <MyProfile handle={`${handle}`}> </MyProfile>
    ) : (
      <StaticProfile handle={props.match.params.handle}> </StaticProfile>
    )
  ) : (
    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <CircularProgress color="secondary"> </CircularProgress>
    </div>
  );

  return <div>{profileMarkup}</div>;
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

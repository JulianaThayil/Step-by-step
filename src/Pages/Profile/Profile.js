import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
//pages
import MyProfile from "./MyProfile";
import StaticProfile from "./StaticProfile";

//redux
import { connect } from "react-redux";

//mui
import CircularProgress from "@material-ui/core/CircularProgress";

function Profile(props) {
  const location = useLocation();
  const [profileState, setProfileState] = useState({
    userHandle: "",
    isnull: true,
  });

  useEffect(() => {
    const userHandle = props.match.params.handle;
    setProfileState({ userHandle: userHandle, isnull: false });
  }, [location]);

  const {
    user: {
      loading,
      credentials: { handle },
    },
  } = props;

  const profileMarkup =
    !loading && !profileState.isnull ? (
      profileState.userHandle === handle ? (
        <MyProfile handle={`${handle}`}> </MyProfile>
      ) : (
        <StaticProfile handle={props.match.params.handle}> </StaticProfile>
      )
    ) : (
      <div style={{ height: "100vh" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%" }}>
          <CircularProgress color="secondary"> </CircularProgress>
        </div>
      </div>
    );

  return <div>{profileMarkup}</div>;
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps)(Profile);

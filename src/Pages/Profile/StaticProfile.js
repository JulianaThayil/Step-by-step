import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import classes from "./Profiles.module.css";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LocationOn from "@material-ui/icons/LocationOn";
import RecipesPosted from "./RecipesPosted";
import InfoIcon from "@material-ui/icons/Info";

//Redux
import { connect } from "react-redux";
import { getUserData } from "../../redux/actions/dataActions";

function StaticProfile(props) {
  const [profileState, setProfileSate] = useState({
    profile: {},
  });

  useEffect(() => {
    const handle = props.handle;
    props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        setProfileSate({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Paper
        style={{
          backgroundImage:
            "url(https://firebasestorage.googleapis.com/v0/b/step-by-step-96e75.appspot.com/o/cover.jpg?alt=media)",
        }}
        className={classes.mainFeaturedPost}
      >
        {<img style={{ display: "none" }} />}
        <div className={classes.overlay} />

        <div className={classes.mainFeaturedPostContent}>
          <img className={classes.avatar} src={profileState.profile.imageUrl} />
          <div className={classes.details}>
            <Typography variant="h5">{profileState.profile.handle} </Typography>
            <br />
            {profileState.profile.bio && (
              <Typography >
                <InfoIcon color="secondary" />
                <span>{profileState.profile.bio}</span>
              </Typography>
            )}
            <br />
            {profileState.profile.location && (
              <Typography >
                <LocationOn color="secondary" />{" "}
                <span> {profileState.profile.location}</span>
              </Typography>
            )}
          </div>
        </div>
      </Paper>
      <br />
      <RecipesPosted> </RecipesPosted>
    </Fragment>
  );
}

StaticProfile.propTypes = {
  handle: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(StaticProfile);

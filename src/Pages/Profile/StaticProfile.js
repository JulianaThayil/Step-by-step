import React, { Component, Fragment } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import classes from "./Profiles.module.css";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationOn from "@material-ui/icons/LocationOn";
import RecipesPosted from "./RecipesPosted";

import { connect } from "react-redux";
import { getUserData } from "../../redux/actions/dataActions";

class StaticProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
    };
  }
  componentDidMount() {
    const handle = this.props.handle;
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { profile } = this.state;

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
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <img className={classes.avatar} src={profile.imageUrl} />
                <div className={classes.details}>
                  <Typography>{profile.handle} </Typography>
                  {profile.bio && (
                    <Typography variant="body2">{profile.bio}</Typography>
                  )}

                  {profile.location && (
                    <Fragment>
                      <LocationOn color="primary" />{" "}
                      <span>{profile.location}</span>
                    </Fragment>
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <br />
        <RecipesPosted> </RecipesPosted>
      </Fragment>
    );
  }
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

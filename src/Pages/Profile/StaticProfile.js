import React, { Component, Fragment } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import classes from "./Profiles.module.css";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationOn from "@material-ui/icons/LocationOn";
import RecipesPosted from "./RecipesPosted";
import InfoIcon from '@material-ui/icons/Info';
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
         
              <div className={classes.mainFeaturedPostContent}>
                <img className={classes.avatar} src={profile.imageUrl} />
                <div className={classes.details}>
             
                
          
                <Typography variant="h5" >{profile.handle} </Typography>
                <br/>
                {profile.bio && (
                <Typography variant="h7">
                 <InfoIcon color="secondary"/><span>{profile.bio}</span>
                 </Typography>
                )}
                <br/>
                <br/>
                {profile.location &&(
                  <Typography variant="h7" >
                    <LocationOn color="secondary" /> <span>{" "} {profile.location}</span>
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

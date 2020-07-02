import React, { Component,Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from '@material-ui/icons/Link';
import PropTypes from "prop-types";
import classes from "./Profiles.module.css";
import EditDetails from "../../components/Editprofile/EditProfile";
import MyButton from "../../util/MyButton";
import InfoIcon from "@material-ui/icons/Info";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
//Redux
import { connect } from "react-redux";
import { uploadImage } from "../../redux/actions/userActions";

class Details extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  render() {
    const {
      user: {
        credentials: { handle, imageUrl, bio, location,website },
      },
    } = this.props;

    return (
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
          <img className={classes.avatar} src={imageUrl} />

          <input
            type="file"
            id="imageInput"
            hidden="hidden"
            onChange={this.handleImageChange}
          />
          <div className={classes.details}>
            <MyButton
              tip="Edit profile picture"
              onClick={this.handleEditPicture}
              btnClassName="button"
            >
              <CameraAltIcon color="secondary" className={classes.editicon} />
            </MyButton>

            <Grid className={classes.username} alignItems="center" spacing="1" container>
              <Grid item>
                <Typography className={classes.username} variant="h5">{handle} </Typography>
              </Grid>
              <Grid item>
                <EditDetails />
              </Grid>
            </Grid>

            <br />
            {bio && (
              <Typography>
                <InfoIcon color="secondary" />
                <span>{bio}</span>
              </Typography>
            )}
            <br />

            {location && (
              <Typography>
                <LocationOn color="secondary" /> <span>{location}</span>
              </Typography>
            )}
            <br/>
            {website && (
                <Fragment>
                  <LinkIcon color="secondary" />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {' '}
                    {website}
                  </a>
                </Fragment>
              )}
              <br/>
          </div>
        </div>
      </Paper>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { uploadImage };

Details.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Details);

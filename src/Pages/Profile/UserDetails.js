import React, {Component,Fragment} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationOn from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import classes from './Profiles.module.css';
import EditIcon from '@material-ui/icons/Edit';
import MyButton from '../../util/MyButton';

//Redux
import { connect } from 'react-redux';
import { uploadImage } from '../../redux/actions/userActions';



class Details extends Component{
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData);
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };
    render(){
      
    const {
      user: {
        credentials: { handle, imageUrl, bio, location }
      }
    } = this.props;
    
  return(
    <Paper style={{  backgroundImage:'url(./assets/cover.jpg)' }} className={classes.mainFeaturedPost} >
    {<img style={{ display: 'none' }}  />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
        
          <div className={classes.mainFeaturedPostContent}>
         <img className={classes.avatar} alt='./assets/blank.png' src={imageUrl} 
          />
           <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={this.handleImageChange}
              />
              <MyButton
                tip="Edit profile picture"
                onClick={this.handleEditPicture}
                btnClassName="button"
              >
                <EditIcon color="primary" />
              </MyButton>
        


          <h3>{handle} </h3>
          {bio && <Typography variant="body2">{bio}</Typography>}
            
              {location && (
                <Fragment>
                  <LocationOn color="primary" /> <span>{location}</span>
                </Fragment>
              )}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
}
 const mapStateToProps = (state) => ({
  user: state.user
});

const mapActionsToProps = { uploadImage };

Details.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapActionsToProps 
)(Details);
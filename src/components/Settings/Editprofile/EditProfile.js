import React, {Component} from 'react';
import classes from './Editprofile.module.css';
import PropTypes from 'prop-types';

//MUI stuff
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
//Redux stuff
import { connect } from 'react-redux';
import { editUserDetails } from '../../../redux/actions/userActions';


class EditProfile extends Component {

  state = {
    bio: '',
    website: '',
    location: ''
  };

  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : '',
      website: credentials.website ? credentials.website : '',
      location: credentials.location ? credentials.location : ''
    });
  };
 
  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  handleChange = (event) => {
    event.preventDefault(); //to prevent auto reload
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault(); //to prevent auto reload
  };
  handleSubmit = (e) => {
    e.preventDefault(); //to prevent auto reload
    const userDetails = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location
    };
    this.props.editUserDetails(userDetails);
    e.preventDefault(); //to prevent auto reload
  };

  render(){

  return (
   
    <form   className={classes.settingform} noValidate autoComplete="off">
      
        <Typography variant='h4' align='center'></Typography>
      <TextField
        name="name"
        label="Name"
        fullWidth
      />
       <br/>
         <TextField
          id="bio"
          label="Bio"
          
          rows="2"
          multiline
          fullWidth
          name="bio"
          placeholder="A short bio about yourself"
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <br/>
        <TextField id="website"  fullWidth label="Website" name="website" value={this.state.website}
                onChange={this.handleChange}/>
        
        <br/>
        <TextField id="location" label="Location" name="location" fullWidth
        value={this.state.location}
        onChange={this.handleChange}  />
        <br/>
        <br/>

        <Button
        variant="contained"
        size="small"
  
        startIcon={<SaveIcon />}
        onClick={this.handleSubmit}
       className={classes.save}>
        Save
      </Button>
     
    </form>
     
  );
}

}

EditProfile.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials
});

export default connect(
  mapStateToProps,
  { editUserDetails }
)(EditProfile);

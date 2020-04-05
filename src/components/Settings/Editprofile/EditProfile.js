import React, {Component} from 'react';
import classes from './Editprofile.module.css';
import PropTypes from 'prop-types';

//MUI stuff
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
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
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    const userDetails = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location
    };
    this.props.editUserDetails(userDetails);
    return(<Alert severity="success">This is a success message!</Alert>);//not rendering
  };

  render(){

  return (
    <Paper className={classes.form}>
    <form  noValidate autoComplete="off">
      <div className={classes.main}>
      <TextField
        name="name"

        label="Name"
      />
       <br/>
         <TextField
          id="standard-multiline-static"
          label="Bio"
          multiline
          rows="4"
          name="bio"
          placeholder="A short bio about yourself"
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <br/>
        <TextField id="standard-required" label="Website" name="website" value={this.state.website}
                onChange={this.handleChange}/>
        
        <br/>
        <TextField id="standard-required" label="Location" name="location"
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
     

      </div>
     
    </form>
    </Paper>
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

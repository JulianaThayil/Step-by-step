import React, { Component } from "react"
import Logo from '../../components/Logo/Logo';
import classes from './Login.modules.scss';
import {Link} from 'react-router-dom';
//import MyProfile from '../Profile/MyProfile'
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';


//Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);

  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const {
      UI: { loading }
    } = this.props;
    const {errors} = this.state;
    
  return (
        <div className={classes.main}>
               <Logo> </Logo>
            <div class="body" >
           
              <img src="https://raw.githubusercontent.com/JulianaThayil/Step-by-step/master/public/assets/pexels-photo-256318.jpeg" class="image"/> 
              <form noValidate onSubmit={this.handleSubmit}>
           
        <div class="segment">
         <Typography variant="h2"> Sign in</Typography>
        </div>
       
        
        <label>
          <input name="email" class="ip" type="email" placeholder="Email" 
          value={this.state.email}
          onChange={this.handleChange}
          error={errors.email ? true : false}
          />
           <div class="error" 
        > </div>
        </label>
       

        <label>
          <input name="password" class="ip" type="password" placeholder="Password" 
          value={this.state.password}
          onChange={this.handleChange}
          error={errors.password ? true : false}
          />
           <div class="error" 
        > </div>
        </label>

        {errors.general && (
          <div class="error">
            {errors.general}
          </div>
        )}
        <br/>
      
        <button  
        disabled={loading}
        class="red but" type="submit"><i class="icon ion-md-lock"></i> Log in
        {loading && (
                <div className={classes.root}>
                <LinearProgress />
              </div>
              )}
        </button>
       <br />
        Forgot password? <a href="#">Click Here </a>

        <br/>
        <center>- or- </center>
        <br/>
        <Link to="/signup">  
        <button class="red but" type="button"><i class="icon ion-md-lock"></i> Register
        <br/>
        </button>
        </Link>   
 
      </form>
              
            </div>
      
    </div>
  );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
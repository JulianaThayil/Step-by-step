import React, { Component } from "react";
import Logo from '../../components/Logo/Logo';
import classes from './Register.modules.css';
import {Link} from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

//Redux
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/userActions';


class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      handle: '',
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
    this.setState({
      loading: true
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    };
    this.props.signupUser(newUserData, this.props.history);
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
    const { errors } = this.state;

    return(
      <div  > 
        <Logo> </Logo>
      <div class="body" >
      <img src="https://raw.githubusercontent.com/JulianaThayil/Step-by-step/master/public/assets/pexels-photo-256318.jpeg" class="image"/> 

        <form noValidate onSubmit={this.handleSubmit} className={classes.registerform}>
  
  <div>
  <div class="segment">
  <Typography variant="h2"> Sign up</Typography>
  </div>
  <label>
    <input name="email" class="ip" type="email" placeholder="Email Address"
    value={this.state.email}
    onChange={this.handleChange}
    error={errors.email ? true : false}
    />
    <div class="error" 
        > {errors.email}</div>
  </label>

  <label>
    <input name="password" class="ip"  type="password" placeholder="Create password"
    value={this.state.password}
    onChange={this.handleChange}
    error={errors.password ? true : false}
    />
    <div class="error"
        > {errors.password}</div>
  </label>

  <label>
    <input name="confirmPassword" class="ip"  type="password" placeholder="Re-enter password"
    value={this.state.confirmPassword}
    onChange={this.handleChange}
    error={errors.confirmPassword ? true : false}
    />
    <div class="error"
        > {errors.confirmPassword}</div>
  </label>

  <label>
    <input name="handle" class="ip" type="text" placeholder="username"
    value={this.state.handle}
    onChange={this.handleChange}
    error={errors.handle ? true : false}
    />
    <div class="error" 
        > {errors.handle}</div>
  </label>

  <button 
   disabled={loading}
  class="red but" type="submit">
    <i class="icon ion-md-lock"></i> 
    Register
    {loading && (
                <div className={classes.root}>
                <LinearProgress />
              </div>
              )}
    </button>
  
  <br/>
  Already a member ? <Link to="/login"> login </Link><br/>
  </div>

</form>   
      </div>
      </div>
    )
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { signupUser }
)(signup);

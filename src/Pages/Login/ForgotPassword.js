import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.modules.scss";
import Typography from "@material-ui/core/Typography";

//firebase
import firebase from "../../firebase/index";
var auth = firebase.auth();

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var emailAddress = this.state.email;
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        this.setState({
            message: "A password reset link has been sent to your email address",
          });
      })
      .catch(function (error) {
        //do something
      });
    
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div class="main">
        <div class="body">
          <img
            src="https://raw.githubusercontent.com/JulianaThayil/Step-by-step/master/public/assets/pexels-photo-256318.jpeg"
            class="image"
          />
          <form noValidate onSubmit={this.handleSubmit}>
            <div class="segment">
              <Typography variant="h5"> Reset Password</Typography>
            </div>
            <br/>
            <div> {this.state.message}</div>
            <label>
              <input
                name="email"
                class="ip"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button class="red but" type="submit">
              <i class="icon ion-md-lock"></i> Send reset link
            </button>
            <br />
            <center>- or- </center>
            <br />
            <Link to="/login">
              <button class="red but" type="button">
                <i class="icon ion-md-lock"></i> Login
                <br />
              </button>
            </Link>

            
          </form>
        </div>
      </div>
    );
  }
}
export default ForgotPassword;

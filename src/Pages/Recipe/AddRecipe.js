import React, { Component,Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import UserNavbar from '../../components/Navbar/userNavbar'
import NewRecipe from '../../components/RecipeCard/NewRecipe';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Mui stuff
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';


//Redux stuff
import { connect } from 'react-redux';

class AddRecipe extends Component {

    render() {
        const {
            user: {
              authenticated,
              loading
            }
          } = this.props;
          let profileMarkup = !loading ? (
            authenticated ? (
              <div> 
              <UserNavbar> </UserNavbar>
              <Typography> 
                Submit a Recipe
              </Typography>
              <NewRecipe> </NewRecipe>
              </div>
            ) : (
              <div> 
              <Navbar> </Navbar> 
              <Paper >
                <Typography variant="body2" align="center">
                  Create an Account to submit Delicious Recipes
                </Typography>
                <span >
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/signup"
                  >
                    Signup
                  </Button>
                </span>
              </Paper>
              </div>
            )
          ) : (
            <LinearProgress variant="query" />
          );
      
          return profileMarkup;
        }
      }
      

AddRecipe.propTypes = {
    user: PropTypes.object.isRequired,
  };
  

const mapStateToProps = (state) => ({
    user: state.user
  });
 
  
  export default connect(
    mapStateToProps )(AddRecipe);
  

import React, { Component,Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import UserNavbar from '../../components/Navbar/userNavbar'
import NewRecipe from '../../components/RecipeCard/NewRecipe';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';


//Mui stuff
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tabs from '../../components/tabs';

//Redux stuff
import { connect } from 'react-redux';

class Settings extends Component {

    render() {
        const {
            user: {
              authenticated,
              loading
            }
          } = this.props;
          let settingsMarkup = !loading ? (
            authenticated ? (
              <div> 
              <UserNavbar> </UserNavbar>
              <Typography> 
                Settings
              </Typography>
              <Tabs> </Tabs>
             
              </div>
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            <LinearProgress variant="query" />
          );
      
          return (
            <div> 
            {settingsMarkup}
            
            </div>
          );
        }
      }
      
Settings.propTypes = {
    user: PropTypes.object.isRequired,
  };
  

const mapStateToProps = (state) => ({
    user: state.user
  });
 
  
  export default connect(
    mapStateToProps )(Settings);
  

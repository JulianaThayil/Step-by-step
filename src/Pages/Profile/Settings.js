import React, { Component,Fragment } from 'react';
import UserNavbar from '../../components/Navbar/userNavbar'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


//Mui stuff
import Typography from '@material-ui/core/Typography';
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
              <div > 
              <UserNavbar> </UserNavbar>
              <br/>
              <Typography  variant="h5" align="center"> 
                Settings
              </Typography>
              
              <Tabs ></Tabs>
             
              </div>
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            <LinearProgress variant="query" />
          );
      
          return (
            <div > 
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
  

import React, { Component,Fragment } from 'react';
import UserNavbar from '../../components/Navbar/userNavbar'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import classes from './Profiles.module.css'
import Footer from '../../components/Footer/Footer'

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
              credentials: { handle }
            },
            UI: { loading }
          } = this.props;
          let settingsMarkup = !loading ? (
            authenticated ? (
              <div  > 
              <UserNavbar> </UserNavbar>
              <br/>
              <div className={classes.settings}> 
              <Typography  variant="h5" align="center"> 
                Settings
              </Typography>
              <Tabs></Tabs> 
              
              
             </div>
             <div className={classes.pad}> </div>
             <Footer> </Footer>
              </div>
            ) : (
              <Redirect to="/login" />
            )
          ) : (
            <LinearProgress color="secondary" variant="query" />
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
    UI: PropTypes.object.isRequired
  };
  

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });
 
  
  export default connect(
    mapStateToProps )(Settings);
  

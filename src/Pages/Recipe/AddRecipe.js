import React, { Component,Fragment } from 'react';
import UserNavbar from '../../components/Navbar/userNavbar'
import NewRecipe from '../../components/RecipeCard/NewRecipe';
import PropTypes from 'prop-types';
import { Link , Redirect} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import classes from './styles.module.css';

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
              <Typography className={classes.root} variant="h4"> 
                Submit a Recipe
              </Typography >
              <NewRecipe> </NewRecipe>
              <br />
              <Footer>

            </Footer>
              </div>
            ) : (
              <div> 
               <Redirect to="/login" />
              </div>
            )
          ) : (
            <LinearProgress color="secondary" />
          );
      
          return (
            <div> 
            {profileMarkup}
            
            </div>
          );
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
  

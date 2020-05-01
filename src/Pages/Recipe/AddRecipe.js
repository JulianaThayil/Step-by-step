import React, { Component,} from 'react';
import Navbar from '../../components/Navbar/Nav'
import NewRecipe from '../../components/RecipeCard/NewRecipe';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import classes from './styles.module.css';

//Mui stuff
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
              <Navbar> </Navbar>
              <div className={classes.image}> 
              <NewRecipe > </NewRecipe>
              </div>
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
  

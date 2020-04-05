import React, {Component,Fragment} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import classes from './Profiles.module.css';
import MyDetails from './MyDetails';
import RecipesPosted from './RecipesPosted';

import { connect } from 'react-redux';
import { getUserData } from '../../redux/actions/dataActions';

class MyProfile extends Component{
  
    render(){
     
    
  return(
    <Fragment > 
    <MyDetails></MyDetails> 
    <RecipesPosted handle={this.props.user.credentials.handle}> </RecipesPosted>

    </Fragment>
  );
}
}

MyProfile.propTypes = {
  user: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data
});

export default connect(
  mapStateToProps,
)(MyProfile);
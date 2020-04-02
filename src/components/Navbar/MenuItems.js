import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';

//redux
import { logoutUser} from '../../redux/actions/userActions';
import { connect } from 'react-redux';

class MenuItems extends Component {
    
    handleLogout = () => {
        this.props.logoutUser();
      };
    render() {
        
        return (
            <div>
            <MenuItem >Feed</MenuItem>
            <MenuItem >Profile</MenuItem>
            <MenuItem onClick={this.handleLogout}> <NavLink to="/login"> Logout </NavLink> </MenuItem>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
  });
  
  const mapActionsToProps = { logoutUser };
  
  MenuItems.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };
  
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(MenuItems);

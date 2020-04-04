import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { NavLink, Redirect} from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ArtTrackIcon from '@material-ui/icons/ArtTrack'; //feed
import PersonIcon from '@material-ui/icons/Person';


//redux
import { logoutUser} from '../../redux/actions/userActions';
import { connect } from 'react-redux';

class MenuItems extends Component {

    
    handleLogout = () => {
        this.props.logoutUser();
  
      };
    render() {
      const {

        user: {
          credentials: { handle }
        }
      } = this.props;
        
        return (
            <div >
            <MenuItem > <ArtTrackIcon /> <NavLink to="/"> Feed </NavLink> </MenuItem>
            <MenuItem ><PersonIcon /> <NavLink to={`/users/${handle}`}>Profile </NavLink> </MenuItem>
            <MenuItem > <SettingsIcon/> <NavLink to="/user/settings"> Settings </NavLink> </MenuItem>
            <MenuItem onClick={this.handleLogout}> <PowerSettingsNewIcon /> <NavLink to="/login" >Logout </NavLink> </MenuItem>
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

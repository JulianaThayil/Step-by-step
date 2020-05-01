import React, { Component,Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom';

//MUI
import MenuItem from '@material-ui/core/MenuItem';

//icons
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ArtTrackIcon from '@material-ui/icons/ArtTrack'; //feed
import PersonIcon from '@material-ui/icons/Person';
import AccountCircle from '@material-ui/icons/AccountCircle';

import PropTypes from 'prop-types';
//redux
import { logoutUser} from '../../redux/actions/userActions';
import { connect } from 'react-redux';


class Iconsbar extends Component {

        handleLogout = () => {
            this.props.logoutUser();
      
          };
    render() {
        const {
            user: {
              authenticated,
              credentials: { handle }
            }
          } = this.props;

          let markup= authenticated ?(
               <div> 
              <MenuItem > <ArtTrackIcon /> <NavLink to="/"> Feed </NavLink> </MenuItem>
              <MenuItem ><PersonIcon /> <NavLink to={`/${handle}`}>Profile </NavLink> </MenuItem>
              <MenuItem > <SettingsIcon/> <NavLink to="/user/settings"> Settings </NavLink> </MenuItem>
              <MenuItem onClick={this.handleLogout}> <PowerSettingsNewIcon /> <NavLink to="/login" >Logout </NavLink> </MenuItem>
              </div>

          ):
          (
            <div>
            
              <MenuItem > <NavLink to="/login"> Login </NavLink> </MenuItem>
              <MenuItem ><NavLink to="/signup">Register</NavLink> </MenuItem>
     
          </div>
          );

        return (
            <div style={{display:'flex'}}>
                {markup}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
  });
  
  const mapActionsToProps = { logoutUser };
  
  Iconsbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };
  
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Iconsbar);

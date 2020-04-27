import React, { Component, Fragment } from 'react'
import classes from './Nav.modules.scss'
import Logo from '../Logo/Logo';
import Search from './Search'
import Notifications from './Notifications'
import Plus from './AddRecipe';
import Profile from './MenuItems'
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Nav extends Component {
    render() {
        const {
            user: {
              authenticated,
              loading
            }
          } = this.props;
        let Markup = authenticated ? (
            <div class="icons">
            <Plus> </Plus>
            <Notifications> </Notifications>
            <Profile> </Profile>
            </div>
        ):(<div class="markup"> 
            <Link to="/login" class="btn"> Login </Link>
            <div style={{width:'5px'}}> </div>
            <Link to="/signup" class="btn"> Register </Link>
        </div>);
        return (
            <div> 
            <nav> 
  <div id="menuToggle">
   
    <input class="hamburger" type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
    <Link to="/" class="n"> <li> Home</li> </Link>
    <Link to="/explore" class="n"> <li> Explore</li> </Link>
    <Link to="/" class="n"> <li> About</li> </Link>
    <Link to="/" class="n"> <li> Contact</li> </Link>
    </ul>
  </div>

  <div> 
  <Logo > </Logo> 
  </div>
  <div class="desktop">
  
  <Link to="/explore" class="a"> EXPLORE </Link>
  <Link class="a">CATEGORIES</Link >
  
  </div>
  <Search > </Search>
 </nav>
 <div class="markup">

<div>  {Markup}</div>
</div>
</div>
        )
    }
}
Nav.propTypes = {
    user: PropTypes.object.isRequired
  };
const mapStateToProps = (state) => ({
    user: state.user
  });
  export default connect(
    mapStateToProps
      )(Nav);  
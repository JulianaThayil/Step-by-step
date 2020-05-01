import React, { Component,Fragment } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { Link, NavLink } from 'react-router-dom';
import Profile from './ProfileIcon';
import Notifications from './Notifications';
import classes from '../../index.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Iconsbar extends Component {
    render() {
        const {
            user: {
              authenticated,
              loading
            }
          } = this.props;

          let markup= authenticated ?(
              <Fragment>
                  <Link to="/addrecipe" >  
                <Tooltip placement="top" title="Add Recipe" >
                <AddIcon />
                </Tooltip>
                </Link> 
                
                <Notifications> </Notifications>

                <Profile> </Profile>
              </Fragment> 
          ):
          (
              <Fragment> 
                   <NavLink class="btn" activeClassName="btn" to="/login"> <Button color="inherit">Login</Button> </NavLink>
                   <NavLink class="btn" activeClassName="btn" to="/signup"><Button color="inherit">Register</Button> </NavLink>
              </Fragment>
          );

        return (
            <div style={{display:'flex'}}>
                {markup}
                
            </div>
        )
    }
}
Iconsbar.propTypes = {
  user: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  user: state.user
});
export default connect(
    mapStateToProps
  )(Iconsbar);
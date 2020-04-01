import React, { Component,Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import UserNavbar from '../../components/Navbar/userNavbar'
import PropTypes from 'prop-types';

//Mui stuff
import CircularProgress from '@material-ui/core/CircularProgress';

//pages
import MyProfile from './MyProfile';
import StaticProfile from './StaticProfile';

//redux
import { connect } from 'react-redux';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
          userHandle: '',
          isnull:true
        };
      }
  componentDidMount() {
    const userHandle = this.props.match.params.handle;
    this.setState({ userHandle:userHandle, isnull:false}); 
  }

    render() {
        const {
            user: {
              authenticated,
              credentials: { handle }
            },
              UI: { loading }
          } = this.props;

          let NavigationBar = 
            authenticated ? (
                <UserNavbar> </UserNavbar>
                ) : (
                    <Navbar> </Navbar>);

         const profileMarkup =
         !this.state.isnull && this.state.userHandle === handle ? (
                <MyProfile> </MyProfile> 
         ): (
                <StaticProfile> </StaticProfile> 
         );      

               

        return (
            
            <div>
            {NavigationBar}
            {profileMarkup}

            </div>
        )
    }
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    userHandle: PropTypes.string.isRequired,
    UI: PropTypes.object.isRequired
  };
  

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });
 
  
  export default connect(
    mapStateToProps
  )(Profile);
  

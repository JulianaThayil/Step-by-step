import React, { Component } from 'react'
import UserNavbar from '../../components/Navbar/userNavbar';
import MyProfile from './MyProfile';
import Feed from './Feed';


export class userHome extends Component {
    render() {
        return (
            <div>
                <UserNavbar> </UserNavbar>
               
                <MyProfile> </MyProfile>
                
            </div>
        )
    }
}

export default userHome

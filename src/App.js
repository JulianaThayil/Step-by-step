import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';


//Redux stuff
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser,getUserData } from './redux/actions/userActions';

//pages
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import UserHome from './Pages/Profile/userHome'
import Notfound from './notfound'
import Home from './Pages/Home/Home';

//util
import AuthRoute from './util/AuthRoute';

import axios from 'axios';

axios.defaults.baseURL ='https://asia-northeast1-step-by-step-96e75.cloudfunctions.net/api';


const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
      <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute exact path="/login" component={Login} />
                <AuthRoute exact path="/signup" component={Register} />
                <Route exact path="/user" component={UserHome} />
              </Switch>
      </div>
    </Router>
    </Provider>
    );
  }
}

export default App;
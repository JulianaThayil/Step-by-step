import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as jwtDecode from "jwt-decode";

//Redux stuff
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//pages
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Notfound from "./notfound";
import Home from "./Pages/Home/Home";
import ViewRecipe from "./Pages/Recipe/viewRecipe";
import Addrecipe from "./Pages/Recipe/AddRecipe";
import Explore from "./Pages/Explore/Explore";

//util
import AuthRoute from "./util/AuthRoute";

import axios from "axios";
import Settings from "./Pages/Profile/Settings";

axios.defaults.baseURL =
  "https://asia-northeast1-step-by-step-96e75.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
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
              <Route exact path="/explore" component={Explore} />
              <AuthRoute exact path="/signup" component={Register} />
              <Route exact path="/user/settings" component={Settings} />
              <Route exact path="/addrecipe" component={Addrecipe} />
              <Route exact path="/:handle" component={Profile} />
              <Route exact path="/:handle/:recipeId" component={ViewRecipe} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

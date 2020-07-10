import React, { Component} from "react";
import ScrollToTop from "react-router-scroll-top";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as jwtDecode from "jwt-decode";

//Redux stuff
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//pages
import Login from "./Pages/Login/Login";
import Forgot from "./Pages/Login/ForgotPassword";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Notfound from "./notfound";
import Home from "./Pages/Home/Home";
import ViewRecipe from "./Pages/Recipe/ViewRecipe";
import Addrecipe from "./Pages/Recipe/AddRecipe";
import Explore from "./Pages/Explore/Explore";
import Results from "./Pages/Explore/Results";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Faq from "./Pages/Faq/Faq";
import Newsletter from "./Pages/Newsletter/Newsletter";


//component
import Navbar from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";

//util
import AuthRoute from "./util/AuthRoute";

import axios from "axios";

axios.defaults.baseURL =
  "https://us-central1-step-by-step-96e75.cloudfunctions.net/api";

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
        <Navbar> </Navbar>
        <ScrollToTop>

            <Switch>
            
              <Route exact path="/" component={Home} />
              <AuthRoute exact path="/login" component={Login} />
              <Route exact path="/account/password/reset" component={Forgot} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/explore/:category/:target" component={Results}/>
              <AuthRoute exact path="/signup" component={Register} />
              <Route exact path="/addrecipe" component={Addrecipe} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/faq" component={Faq}/>
              <Route exact path="/newsletter" component={Newsletter} />
              <Route exact path="/blog" component={Notfound} />

              <Route exact path="/:handle" component={Profile} />

              <Route exact path="/:handle/:recipeId" component={ViewRecipe}/>

              <Route component={Notfound} />
            
            </Switch>
            </ScrollToTop>
        <Footer> </Footer>
 
        </Router>
      </Provider>
    );
  }
}

export default App;

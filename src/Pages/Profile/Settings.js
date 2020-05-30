import React, { Component, Fragment } from "react";
import Navbar from "../../components/Navbar/Nav";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import classes from "./Profiles.module.css";
import Footer from "../../components/Footer/Footer";

//Mui stuff
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabs from "../../components/tabs";

//Redux stuff
import { connect } from "react-redux";

class Settings extends Component {
  render() {
    const {
      user: {
        authenticated,
        credentials: { handle },
      },
      UI: { loading },
    } = this.props;
    let settingsMarkup = !loading ? (
      authenticated ? (
        <div>
          <Navbar> </Navbar>
          <br />
          <div className={classes.settings}>
            <Typography variant="h5" >
              Settings
            </Typography>
            <br/>
            <Tabs></Tabs>
          </div>
          <div className={classes.pad}> </div>
          <Footer> </Footer>
        </div>
      ) : (
        <Redirect to="/login" />
      )
    ) : (
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <CircularProgress color="secondary"> </CircularProgress>
      </div>
    );

    return <div>{settingsMarkup}</div>;
  }
}

Settings.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps)(Settings);

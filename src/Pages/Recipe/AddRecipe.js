import React, { Component } from "react";
import NewRecipe from "../../components/Recipe/NewRecipe";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import classes from "./styles.module.css";

//Mui stuff
import CircularProgress from "@material-ui/core/CircularProgress";

//Redux stuff
import { connect } from "react-redux";

class AddRecipe extends Component {
  render() {
    const {
      user: { authenticated, loading },
    } = this.props;
    let profileMarkup = !loading ? (
      authenticated ? (
        <div className={classes.image}>
          <NewRecipe> </NewRecipe>
        </div>
      ) : (
        <div>
          <Redirect to="/login" />
        </div>
      )
    ) : (
      <div style={{ height: "100vh" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%" }}>
          <CircularProgress color="secondary"> </CircularProgress>
        </div>
      </div>
    );

    return <div>{profileMarkup}</div>;
  }
}

AddRecipe.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AddRecipe);

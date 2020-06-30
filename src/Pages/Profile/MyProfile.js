import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MyDetails from "./Details";
import RecipesPosted from "./RecipesPosted";

import { connect } from "react-redux";

class MyProfile extends Component {
  render() {
    return (
      <Fragment>
        <MyDetails></MyDetails>
        <RecipesPosted handle={this.props.user.credentials.handle}>
          {" "}
        </RecipesPosted>
      </Fragment>
    );
  }
}

MyProfile.propTypes = {
  user: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

export default connect(mapStateToProps)(MyProfile);

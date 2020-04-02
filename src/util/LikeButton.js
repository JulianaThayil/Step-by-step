import React, { Component } from 'react';
import MyButton from './MyButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Icons
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// REdux
import { connect } from 'react-redux';
import { likeRecipe, unlikeRecipe } from '../redux/actions/dataActions';

class LikeButton extends Component {
  likedRecipe = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.recipeId === this.props.recipeId
      )
    )
      return true;
    else return false;
  };
  likeRecipe = () => {
    this.props.likeRecipe(this.props.recipeId);
  };
  unlikeRecipe = () => {
    this.props.unlikeRecipe(this.props.recipeId);
  };
  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="secondary" />
        </MyButton>
      </Link>
    ) : this.likedRecipe() ? (
      <MyButton tip="Undo like" onClick={this.unlikeRecipe}>
        <Favorite  color="secondary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeRecipe}>
        <FavoriteBorder color="secondary" />
      </MyButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  recipeId: PropTypes.string.isRequired,
  likeRecipe: PropTypes.func.isRequired,
  unlikeRecipe: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapActionsToProps = {
  likeRecipe,
  unlikeRecipe
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LikeButton);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Skeleton from '../../components/Skeleton/RecipeSkeleton';
import MyRecipes from '../../components/RecipeCard/MyRecipes';
import classes from '../../Pages/Home/Home.module.css'

import { connect } from 'react-redux';
import { getUserData } from '../../redux/actions/dataActions';

class RecipesPosted extends Component {
  state = {
    profile: null,
    recipeIdParam: null
  };
  componentDidMount() {
    const handle = this.props.handle;
    const recipeId = this.props.recipeId;

    if (recipeId) this.setState({ recipeIdParam: recipeId });

  }
  render() {
    const { recipes, loading } = this.props.data;
    const { recipeIdParam } = this.state;

    const recipesMarkup = loading ? (
      <Skeleton />
    ) : recipes === null ? (
      <p></p>
    ) : !recipeIdParam  ?  (
      recipes.map((recipe) => <MyRecipes key={recipe.recipeId} recipe={recipe} />)
    ) : (
      recipes.map((recipe) => {
        if (recipe.recipeId !== recipeIdParam)
          return <MyRecipes key={recipe.recipeId} recipe={recipe} />;
      })
    );

    return (
      <div className={classes.bg}> 
          {recipesMarkup}
      </div>
    );
  }
}

RecipesPosted.propTypes = {
  handle: PropTypes.string.isRequired,
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  recipeId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getUserData }
)(RecipesPosted);
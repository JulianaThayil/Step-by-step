import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "../../components/Skeleton/RecipeSkeleton";
import MyRecipes from "../../components/Recipe/MyRecipes";
import classes from "../../Pages/Home/Home.module.css";

import { connect } from "react-redux";

function RecipesPosted(props) {

  const [recipeState, setRecipeState] = useState({
    recipeIdParam: null,
  });

  useEffect(() => {
    const recipeId = props.recipeId;
    if (recipeId) setRecipeState({ recipeIdParam: recipeId });
  }, [recipeState]);

  const { recipes, loading } = props.data;
  const { recipeIdParam } = recipeState;

  const recipesMarkup = loading ? (
    <Skeleton />
  ) : recipes === null ? (
    <p>No recipes posted yet</p>
  ) : !recipeIdParam ? (
    recipes.map((recipe) => <MyRecipes key={recipe.recipeId} recipe={recipe} />)
  ) : (
    recipes.map((recipe) => {
      if (recipe.recipeId !== recipeIdParam)
        return <MyRecipes key={recipe.recipeId} recipe={recipe} />;
    })
  );

  return <div className={classes.bg}>{recipesMarkup}</div>;
}

RecipesPosted.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(RecipesPosted);

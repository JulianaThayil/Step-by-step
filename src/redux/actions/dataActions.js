import {
    SET_RECIPES,
    LOADING_DATA,
    LIKE_RECIPE,
    UNLIKE_RECIPE,
    DELETE_RECIPE,
    SET_ERRORS,
    POST_RECIPE,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_RECIPE,
    STOP_LOADING_UI,
    SUBMIT_COMMENT
  } from '../types';
  import axios from 'axios';
  
  // Get all recipes
  export const getRecipes = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get('/recipes')
      .then((res) => {
        dispatch({
          type: SET_RECIPES,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_RECIPES,
          payload: []
        });
      });
  };
  export const getRecipe = (recipeId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`/recipe/${recipeId}`)
      .then((res) => {
        dispatch({
          type: SET_RECIPE,
          payload: res.data
        });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };
  // Post a recipe
  export const postRecipe = (newRecipe) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post('/recipe', newRecipe)
      .then((res) => {
        dispatch({
          type: POST_RECIPE,
          payload: res.data
        });
        dispatch(clearErrors());
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      });
  };
  // Like a recipe
  export const likeRecipe = (recipeId) => (dispatch) => {
    axios
      .get(`/recipe/${recipeId}/like`)
      .then((res) => {
        dispatch({
          type: LIKE_RECIPE,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
  // Unlike a Recipe
  export const unlikeRecipe = (recipeId) => (dispatch) => {
    axios
      .get(`/recipe/${recipeId}/unlike`)
      .then((res) => {
        dispatch({
          type: UNLIKE_RECIPE,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };
  // Submit a comment
  export const submitComment = (recipeId, commentData) => (dispatch) => {
    axios
      .post(`/recipe/${recipeId}/comment`, commentData)
      .then((res) => {
        dispatch({
          type: SUBMIT_COMMENT,
          payload: res.data
        });
        dispatch(clearErrors());
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      });
  };
  export const deleteRecipe = (recipeId) => (dispatch) => {
    axios
      .delete(`/recipe/${recipeId}`)
      .then(() => {
        dispatch({ type: DELETE_RECIPE, payload: recipeId });
      })
      .catch((err) => console.log(err));
  };
  
  export const getUserData = (userHandle) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/user/${userHandle}`)
      .then((res) => {
        dispatch({
          type: SET_RECIPES,
          payload: res.data.recipes
        });
      })
      .catch(() => {
        dispatch({
          type: SET_RECIPES,
          payload: null
        });
      });
  };
  
  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
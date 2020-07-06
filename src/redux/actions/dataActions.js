import {
    SET_RECIPES,
    SET_RESULTS,
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
  import firebase from "../../firebase/index";
  var db = firebase.firestore();

  // Get all recipes
  export const getRecipes = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    
    db.collection('recipes')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      let recipes = [];
      data.forEach((doc) => {
        recipes.push({
          recipeId: doc.id,
          title:doc.data().title,
          body:doc.data().body,
          pictureUrl:doc.data().pictureUrl,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
          commentCount: doc.data().commentCount,
          likeCount: doc.data().likeCount,
          userImage: doc.data().userImage
        });
      });
      dispatch({
        type: SET_RECIPES,
        payload: recipes
      });
        
      })
      .catch((err) => {
        dispatch({
          type: SET_RECIPES,
          payload: []
        });
      });
  };

  //get a recipe
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

  //get a catergory
  export const getCategory = (categor,type) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    db.collection("recipes")
      .where(categor, "==", type)
      .get()
      .then((snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({
            recipeId: doc.id,
          title:doc.data().title,
          body:doc.data().body,
          pictureUrl:doc.data().pictureUrl,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
          commentCount: doc.data().commentCount,
          likeCount: doc.data().likeCount,
          userImage: doc.data().userImage
          });
        });
        dispatch({
          type: SET_RESULTS,
          payload: results
        });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };
  

  // Post a recipe
  export const postRecipe = (newRecipe,history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post('/recipe', newRecipe)
      .then((res) => {
        dispatch({
          type: POST_RECIPE,
          payload: res.data
        });
        dispatch({ type: CLEAR_ERRORS });
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS
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
  
  //other user's data
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
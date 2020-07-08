import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classes from "../Home/Home.module.css";

//My components
import Recipe from "../../components/Recipe/RecipeCard";
import Skeleton from "../../components/Skeleton/RecipeSkeleton";

//Redux stuff
import { connect } from "react-redux";
import { getCategory } from "../../redux/actions/dataActions";
import { Typography } from "@material-ui/core";

function Results(props) {
  useEffect(() => {
    const type = props.match.params.target;
    const categor = props.match.params.category;
    props.getCategory(categor, type);
  }, []);

  const {
    UI: { loading },
  } = props;

  const { results } = props.data;
  let markup = !loading ? (
    Object.keys(results).length === 0 ? (
        <p>No recipes found</p>):
    (results.map((recipe) => <Recipe key={recipe.recipeId} recipe={recipe} />) )
  ) : (
    <Skeleton> </Skeleton>
  );

  return (
    <div style={{ minHeight: "100vh",marginTop:'80px' }}>
      <Typography align="center" variant="h4">{props.match.params.target} recipes </Typography>
      <div className={classes.bg}>{markup}</div>
    </div>
  );
}
Results.propTypes = {
  getCategory: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  UI: state.UI,
});

export default connect(mapStateToProps, { getCategory })(Results);

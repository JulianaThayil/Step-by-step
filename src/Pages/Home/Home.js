import React, { Component } from "react";
import PropTypes from "prop-types";
import Recipe from "../../components/RecipeCard/RecipeCard";
import Footer from "../../components/Footer/Footer";
import classes from "./Home.module.css";
import Skeleton from "../../components/Skeleton/RecipeSkeleton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Navbar from "../../components/Navbar/Nav";
import Featuredposts from "../../components/Featured posts/Featuredposts";


//Redux stuff
import { connect } from "react-redux";
import { getRecipes } from "../../redux/actions/dataActions";

class Home extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }
  render() {
    const {
      user: { authenticated, loading },
    } = this.props;

    let NavigationBar = !loading ? (
      <Navbar> </Navbar>
    ) : (
      <LinearProgress color="secondary" />
    );

    const { recipes } = this.props.data;
    let recentRecipesMarkup = !loading ? (
      recipes.map((recipe) => <Recipe key={recipe.recipeId} recipe={recipe} />)
    ) : (
      <Skeleton> </Skeleton>
    );

    return (
      <div>
        {NavigationBar}

        <div className={classes.featured}>
          <h4 className={classes.maintext}>Featured Posts</h4>
          <Featuredposts></Featuredposts>
        </div>

        <div>
          <h4 className={classes.recent}> Recent Posts</h4>
          <div className={classes.bg}>{recentRecipesMarkup}</div>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.object.isRequired,
  getRecipes: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
});

export default connect(mapStateToProps, { getRecipes })(Home);

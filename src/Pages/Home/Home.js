import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navibar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Recipe from '../../components/RecipeCard/RecipeCard';
import Footer from '../../components/Footer/Footer';
import {Link} from 'react-router-dom';
import classes from './Home.module.css';
import Skeleton from '../../components/Skeleton/RecipeSkeleton';

//Redux stuff
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions/dataActions';

class Home extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }
  render(){
    const { recipes, loading } = this.props.data;
    let recentRecipesMarkup = !loading ? (
      recipes.map((recipe) => <Recipe key={recipe.recipeId} recipe={recipe} />)
    ) : (
      <Skeleton> </Skeleton>
    );

    return (
     <div> 
        <Navibar> </Navibar>
        <Carousel></Carousel>
        <center> <h3> Popular</h3></center>
        <div className={classes.bg}> 

        {recentRecipesMarkup}

        </div>
        
        <Footer></Footer>
        
      </div>
    );
  }
}

Home.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(Home);
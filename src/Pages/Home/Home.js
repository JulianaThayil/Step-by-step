import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../components/Carousel/Carousel';
import Recipe from '../../components/RecipeCard/RecipeCard';
import Footer from '../../components/Footer/Footer';
import classes from './Home.module.css';
import Skeleton from '../../components/Skeleton/RecipeSkeleton';
import ScrollToTop from '../../components/ScrollToTop';
import LinearProgress from '@material-ui/core/LinearProgress';
import PopularRecipeCard from '../../components/ExploreCards/popularRecipeCard';
import Navbar from '../../components/Navbar/Nav'


//Redux stuff
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions/dataActions';

class Home extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }
  render(){
    const {
      user: {
        authenticated,
        loading
      }
    } = this.props;

    let NavigationBar = !loading ? (
            <Navbar> </Navbar>
                    ) : (
                      <LinearProgress color="secondary" />
                    );

    const { recipes} = this.props.data;
    let recentRecipesMarkup = !loading ? (
      recipes.map((recipe) => <Recipe key={recipe.recipeId} recipe={recipe} />)
    ) : (
      <Skeleton> </Skeleton>
    );

    return (
     <div  > 
       {NavigationBar}


        <div className={classes.wrapper}>
          <br />
          
          <Carousel> </Carousel>
          <br/> 
          <br/>
          <br/>
          <center><h4 className={classes.maintext}  >Explore </h4></center>
          </div>
          <PopularRecipeCard></PopularRecipeCard>
          <br/> 
         
       
       
        <br/> 
        <center> <h4  className={classes.maintext} > Recent Posts</h4></center>
        <div className={classes.bg}> 
       
        {recentRecipesMarkup}
        </div>
        <br/>
        <ScrollToTop></ScrollToTop> 
        <br/>

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
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(Home);
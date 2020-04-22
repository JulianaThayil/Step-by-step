import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navibar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import Recipe from '../../components/RecipeCard/RecipeCard';
import Footer from '../../components/Footer/Footer';
import classes from './Home.module.css';
import Skeleton from '../../components/Skeleton/RecipeSkeleton';
import ScrollToTop from '../../components/ScrollToTop'
import UserNavbar from '../../components/Navbar/userNavbar';
import LinearProgress from '@material-ui/core/LinearProgress';


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
            authenticated ? (
                <UserNavbar> </UserNavbar>
                ) : (
                    <Navibar> </Navibar>)
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
<<<<<<< HEAD

        <div className={classes.wrapper}>
          <br />
          <center><h4 > Featured this week </h4></center>
          <br />
          
          <Carousel> </Carousel>
          <br/> 
          <br/>
          <br/>

          <center> <h3> Recent Posts</h3></center>

          <div className={classes.bg}> 
          {recentRecipesMarkup}
          </div>
        </div>
    
=======
         
        <br />
        <center><h4 > Featured this week </h4></center>
         <br />
        
        <Carousel> </Carousel>
        <br/> 
        <br/>
        <br/>
        <center> <h3> Recent Posts</h3></center>
        <div className={classes.bg}> 

        {recentRecipesMarkup}
        </div>
>>>>>>> 45e3b12363df894f68f0d74ff5c7ed7add36e37f
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
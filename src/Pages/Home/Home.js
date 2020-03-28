import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import Navibar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Footer from '../../components/Footer/Footer';
import {Link} from 'react-router-dom';
import classes from './Home.module.css';


class Home extends Component {
  render() {
    return (
     <div> 
        <Navibar> </Navibar>
        <Carousel></Carousel>
        <center> <h3> Popular</h3></center>
        <div className={classes.bg}> 
          <RecipeCard > </RecipeCard>
          <RecipeCard> </RecipeCard>
          <RecipeCard> </RecipeCard>
          <RecipeCard> </RecipeCard>
          <RecipeCard> </RecipeCard>
          <RecipeCard> </RecipeCard>
        </div>
        
        <Footer></Footer>
        
      </div>
    );
  }
}

export default Home;
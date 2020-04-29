import React from "react";
import Logo from '../../components/Logo/Logo';
import classes from './Explore.module.css';
import PopularRecipeCard from '../../components/ExploreCards/popularRecipeCard';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Nav'


const explore = () => {



    return (
        
 <div >
            <Navbar> </Navbar>
            <br/>
           
            <div className={classes.height}>
                <div className={classes.subPopular}>
                    <h5 className={classes.heading}>Popular Recipe Categories</h5>
                   <center> <p>Find and share every cooking inspirations. Find recipes and delicacies
                        along with how-tos based on the food you love and are attached to. </p></center>
                </div>

                <PopularRecipeCard></PopularRecipeCard>

                <hr className="rounded"></hr>

                <div className={classes.subAll}>
                    <h1 className={classes.heading}>Browse All Categories</h1>

                    <div className={classes.grids}>
                        <div className={classes.gridOne}>
                            <img src="https://iamafoodblog.com/wp-content/uploads/2019/02/full-english-7355w.jpg"></img>
                            <h3>Meal Type</h3>
                            <hr className="rounded"></hr>

                            <h6>Breakfast and Brunch</h6>
                            <h6>Desserts</h6>
                            <h6>Dinner</h6>
                            <h6>Lunch</h6>
                        </div>

                        <div className={classes.gridTwo}>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/salad-mix-plate-shot-from-above-on-rustic-wooden-royalty-free-image-1018199524-1556130377.jpg"></img>
                            <h3>Diet and Health</h3>
                            <hr className="rounded"></hr>

                            <h6>Diabetic</h6>
                            <h6>Low Carbs</h6>
                            <h6>Dairy Free</h6>
                            <h6>Gluten Free</h6>
                            <h6>Healthy</h6>
                            <h6>Heart Health</h6>
                            <h6>High Fiber</h6>
                            <h6>Low Calorie</h6>
                            <h6>Low Colestrol</h6>
                            <h6>Low Fat</h6>
                            <h6>Weight Loss</h6>
                        </div>

                        <div className={classes.gridThree}>
                            <img src="https://i.ndtvimg.com/i/2015-12/italian_625x350_41450863014.jpg"></img>
                            <h3>Dish Type</h3>
                            <hr className="rounded"></hr>

                            <h6>Appetizers and Snacks</h6>
                            <h6>Bread Recipe</h6>
                            <h6>Cake Recipe</h6>
                            <h6>Christmas Cooking</h6>
                            <h6>Cocktails</h6>
                            <h6>Pasta Recipe</h6>
                            <h6>Pizzas</h6>
                            <h6>Pie Recipe</h6>
                            <h6>Sandwiches</h6>
                            <h6>Smoothies</h6>
                            <h6>Soups</h6>
                        </div>

                        <div className={classes.gridFour}>
                            <img src="https://miro.medium.com/max/1080/1*SR3BK6x1xZWlWvvXpmEp8w.jpeg"></img>
                            <h3>World Cruisine</h3>
                            <hr className="rounded"></hr>

                            <h6>Chinese</h6>
                            <h6>Indian</h6>
                            <h6>Italian</h6>
                            <h6>Mexican</h6>
                        </div>

                        <div className={classes.gridFive}>
                            <img src="https://www.univarsolutions.com/assets/uploads/food_header_img.jpeg"></img>
                            <h3>Ingredients</h3>
                            <hr className="rounded"></hr> 

                            <h6>Beef</h6>
                            <h6>Chicken</h6>
                            <h6>Rice</h6>
                            <h6>Salmon</h6>
                        </div>

                        <div className={classes.gridEight}>
                            <img src="https://i.ytimg.com/vi/7JwYHAGUECg/maxresdefault.jpg"></img>
                            <h3>Cooking Style</h3>
                            <hr className="rounded"></hr>
                            <h6>BBQ and Grill</h6>
                            <h6>Cooking for Kids</h6>
                            <h6>Quick and Easy</h6>
                            <h6>Vegetarian</h6>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default explore;
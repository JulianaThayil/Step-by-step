import React from "react";
import Logo from "../../components/Logo/Logo";
import classes from "./Explore.module.css";
import PopularRecipeCard from "../../components/ExploreCards/popularRecipeCard";

const explore = () => {
  return (
    <div>
      <div className={classes.subPopular}>
        <h5 className={classes.heading}>Popular Categories</h5>
      </div>

      <PopularRecipeCard></PopularRecipeCard>

      <hr className="rounded"></hr>

      <div className={classes.subPopular}>
        <h5 className={classes.heading}>Browse all Categories</h5>
      </div>

      <div className={classes.browseCats}>
        <div className={classes.one}>
          <div>
            <img src="/assets/meal.jpg"></img>
          </div>
          <div className={classes.tag}>Meal type</div>
        </div>

        <div className={classes.two}>
          <div>
            <img src="/assets/diet.jpg"></img>
          </div>
          <div className={classes.tag}>Diet and Health</div>
        </div>

        <div className={classes.three}>
          <div>
            <img src="/assets/dish.jpg"></img>
          </div>
          <div className={classes.tag}>Dish Type</div>
        </div>

        <div className={classes.four}>
          <div>
            <img src="/assets/world.jpg"></img>
          </div>
          <div className={classes.tag}>World Crusines</div>
        </div>

        <div className={classes.five}>
          <div>
            <img src="/assets/style.jpg"></img>
          </div>
          <div className={classes.tag}>Cooking Style</div>
        </div>

        <div className={classes.six}>
          <div>
            <img src="/assets/ingred.jpg"></img>
          </div>
          <div className={classes.tag}>Ingredients</div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default explore;

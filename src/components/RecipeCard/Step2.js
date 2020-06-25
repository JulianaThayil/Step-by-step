import React from "react";
import PropTypes from "prop-types";
import classes from "./RecipeCard.module.css";

//Mui
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

const Step2 = ({ ingredientState, handleingredientChange,addingredient }) => {

  return (
    <div>
      <br />
      <Typography>
        Ingredients (click the + button below to add a new ingredient){" "}
      </Typography>

      {ingredientState.map((val, idx) => {
          let ingredientId = `ingredient-${idx}`,
          amountId = `amount-${idx}`;
            return (
      <div key={`ingredient-${idx}`} className={classes.display2}>
        <br />
        <input
          type="text"
          name={ingredientId}
          data-idx={idx}
          id={ingredientId}
          className="name"
          placeholder={`Ingredient ${idx + 1} `}
          value={ingredientState[idx].name}
          onChange={handleingredientChange}
        />
        
        <input
          type="text"
          name={amountId}
          data-idx={idx}
          id={amountId}
          className="amount"
          placeholder="quantity"
          value={ingredientState[idx].amount}
          onChange={handleingredientChange}
        />
        <br/>
      </div>
      );
    })}

    <br/>
       <Tooltip
         onClick={addingredient}
         title="Add new ingredient"
         style={{ outline: "none" }}
       >
         <Fab color="secondary" aria-label="add" size="small">
           <AddIcon />
         </Fab>
       </Tooltip>
       <div style={{ height: "8vh" }}></div>
    </div>
  );
};

Step2.propTypes = {
  ingredientState: PropTypes.array,
  handleingredientChange: PropTypes.func,
  addingredient: PropTypes.func,
};

export default Step2;

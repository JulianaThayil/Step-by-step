import React from "react";
import PropTypes from "prop-types";
import classes from "./RecipeCard.module.css";

//Mui
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

const Step3 = ({
  instructionState,
  handleinstructionChange,
  addinstruction,
}) => {
  return (
    <div>
      <br />
      <Typography>
        Instructions (click the + button below to add a new instruction){" "}
      </Typography>

      {instructionState.map((val, idx) => {
        let instructionId = `instruction-${idx}`;
        return (
          <div key={`instruction-${idx}`} className={classes.display2}>
            <label htmlFor={instructionId}>{`Step #${idx + 1}`}</label>
            <input
              type="text"
              name={instructionId}
              data-idx={idx}
              id={instructionId}
              className="step"
              value={instructionState[idx].step}
              onChange={handleinstructionChange}
            />
          </div>
        );
      })}

      <br />
      <Tooltip
        onClick={addinstruction}
        title="Add new step"
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

Step3.propTypes = {
  instructionState: PropTypes.array,
  handleinstructionChange: PropTypes.func,
  addinstruction: PropTypes.func,
};

export default Step3;

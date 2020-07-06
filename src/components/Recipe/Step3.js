import React from "react";
import PropTypes from "prop-types";
import classes from "./RecipeCard.module.css";

//Mui
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";

const Step3 = ({
  detailsState,
  instructionState,
  handleinstructionChange,
  handlechange,
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
          <div key={`instruction-${idx}`}>
            <textarea
              rows="3"
              cols="30"
              type="text"
              name={instructionId}
              data-idx={idx}
              placeholder={`Step ${idx + 1}`}
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
      <br/>
      <TextField
        required
        name="notes"
        label="Notes "
        rows="4"
        multiline
        value={detailsState.notes}
        fullWidth
        onChange={handlechange}
        variant="outlined"
      />
      <div style={{ height: "8vh" }}></div>
    </div>
  );
};

Step3.propTypes = {
  detailsState: PropTypes.array,
  instructionState: PropTypes.array,
  handleinstructionChange: PropTypes.func,
  handlechange: PropTypes.func,
  addinstruction: PropTypes.func,
};

export default Step3;

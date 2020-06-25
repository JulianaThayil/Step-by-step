import React,{Fragment} from "react";
import PropTypes from "prop-types";
import classes from "./RecipeCard.module.css";
import AutoComplete from "./AutoComplete";

//Mui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";

//icons
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const Step1 = ({ detailsState, handlechange }) => {
  return (
    <Fragment>
      <div className={classes.image} align="center">
        <PhotoCamera />
        <input
          accept="image/*"
          className={classes.ip}
          id="imageInput"
          type="file"
        />
      </div>
      <br />

      <TextField
        name="title"
        required
        label="Name of your dish"
        variant="outlined"
        value={detailsState.title}
        fullWidth
        onChange={handlechange}
      />
      <br />
      <br />

      <div className={classes.display}>
        <div className={classes.recipedetails}>
          <TextField
            required
            name="preparationTime"
            label="Preparation time: "
            value={detailsState.preparationTime}
            onChange={handlechange}
            variant="outlined"
          />
        </div>

        <div className={classes.recipedetails}>
          <TextField
            required
            name="cookingTime"
            label="Cooking time: "
            value={detailsState.cookingTime}
            onChange={handlechange}
            variant="outlined"
          />
        </div>
      </div>
      <br />

      <div className={classes.display}>
        <div className={classes.recipedetails}>
          <TextField
            required
            name="serves"
            label="Serves"
            type="number"
            InputLabelProps={{}}
            variant="outlined"
            value={detailsState.serves}
            onChange={handlechange}
          />
        </div>

        <div className={classes.recipedetails}>
          <FormControl>
            <InputLabel htmlFor="age-native-simple">
              Difficulty-Level
            </InputLabel>
            <Select
              labelId="difficultyLevel"
              id="difficultyLevel"
              name="difficultyLevel"
              placeholder="Difficulty Level"
              value={detailsState.difficultyLevel}
              onChange={handlechange}
              variant="outlined"
            >
              <MenuItem value={`Easy`}>Easy</MenuItem>
              <MenuItem value={`Intermediate`}>Intermediate</MenuItem>
              <MenuItem value={`Hard`}>Hard</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <br />

      <TextField
        required
        name="body"
        label="Description "
        rows="4"
        multiline
        value={detailsState.body}
        fullWidth
        onChange={handlechange}
        variant="outlined"
      />

      <br />
      <FormControl style={{ display: "flexinline", flexDirection: "row" }}>
        <RadioGroup
          name="type"
          value={detailsState.type}
          onChange={handlechange}
        >
          <div style={{ display: "flex" }}>
            <FormControlLabel value="veg" control={<Radio />} label=" Veg" />
            <FormControlLabel
              value="nonveg"
              control={<Radio />}
              label="Non-Veg"
            />
          </div>
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Typography> Add tags to help people find your recipe </Typography>
      <br />
      <AutoComplete> </AutoComplete>
      <br />

      <br />
    </Fragment>
  );
};

Step1.propTypes = {
  detailsState: PropTypes.object,
  handlechange: PropTypes.func,
};

export default Step1;

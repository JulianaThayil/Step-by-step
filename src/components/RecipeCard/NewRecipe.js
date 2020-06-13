import React, { Component, Fragment } from "react";
import classes from "./RecipeCard.module.css";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import AutoComplete from "./AutoComplete";
import "../../../src/index.css";
import { Redirect } from "react-router-dom";

//firebase
import { storage } from "../../firebase/index";

//Mui stuff
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";

//icons
import PhotoCamera from "@material-ui/icons/PhotoCamera";

// Redux stuff
import { connect } from "react-redux";
import { postRecipe, clearErrors } from "../../redux/actions/dataActions";

import StepZilla from "react-stepzilla";

class NewRecipe extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      preparationTime: "",
      cookingTime: "",
      serves: "",
      difficultyLevel: "Intermediate",
      body: "",
      ingredients: [{ name: "", amount: "" }],
      instructions: [{ step: "" }],
      type: "nonveg",
      image: null,
      success: false,
      errors: {},
    };
  }
  
  addIngredient = (e) => {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, { name: "", amount: "" }],
    }));
  };

  addInstruction = (e) => {
    this.setState((prevState) => ({
      instructions: [...prevState.instructions, { step: "" }],
    }));
  };

  handlePicture = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
     
    }
  };
  handleChange = (e) => {
    e.preventDefault();
    if (["name", "amount"].includes(e.target.className)) {
      let ingredients = [...this.state.ingredients];
      ingredients[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ ingredients });
    }
    else if (["step"].includes(e.target.className)) {
      let instructions = [...this.state.instructions];
      instructions[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ instructions });
    }
    else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault(); //to prevent auto reload

    this.setState({
      loading: true,
    });

    const { image } = this.state;
    let imageFileName=new Date().toISOString() + image.name;

    const uploadTask = storage.ref(`recipes/${imageFileName}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("recipes")
          .child(imageFileName)
          .getDownloadURL()
          .then((url) => {
            url = url + "?alt=media";
            const newRecipe = {
              title: this.state.title,
              preparationTime: this.state.preparationTime,
              cookingTime: this.state.cookingTime,
              serves: this.state.serves,
              difficultyLevel: this.state.difficultyLevel,
              body: this.state.body,
              ingredients: this.state.ingredients,
              instructions: this.state.instructions,
              type: this.state.type,
              pictureUrl: url,
            };
            this.props.postRecipe(newRecipe, this.props.history);
          });
        this.setState({ success: true });
      }
    );
  };

  render() {
    const { errors, ingredients,instructions, success } = this.state;
    const {
      UI: { loading },
    } = this.props;

    let redirect = null;
    if (success) {
      redirect = <Redirect to="/" />;
    }

    const steps = [
      {
        name: "Step 1",
        component: (
          <Fragment>
            <br/>
            <div className={classes.image} align="center">
              <PhotoCamera />
              <input
                accept="image/*"
                className={classes.ip}
                id="imageInput"
                onChange={this.handlePicture}
                type="file"
              />
            </div>
            <br />

            <TextField
              name="title"
              required
              label="Name of your dish"
              variant="outlined"
              value={this.state.title}
              fullWidth
              onChange={this.handleChange}
            />
            <br />
            <br />

            <div className={classes.display}>
              <div className={classes.recipedetails}>
                <TextField
                  required
                  name="preparationTime"
                  label="Preparation time: "
                  value={this.state.preparationTime}
                  onChange={this.handleChange}
                  variant="outlined"
                />
              </div>

              <div className={classes.recipedetails}>
                <TextField
                  required
                  name="cookingTime"
                  label="Cooking time: "
                  value={this.state.cookingTime}
                  onChange={this.handleChange}
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
                  value={this.state.serves}
                  onChange={this.handleChange}
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
                    value={this.state.difficultyLevel}
                    onChange={this.handleChange}
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
              value={this.state.body}
              fullWidth
              onChange={this.handleChange}
              variant="outlined"
            />

            <br />
            <FormControl
              style={{ display: "flexinline", flexDirection: "row" }}
            >
              <RadioGroup
                name="type"
                value={this.state.type}
                onChange={this.handleChange}
              >
                <div style={{ display: "flex" }}>
                  <FormControlLabel
                    value="veg"
                    control={<Radio />}
                    label=" Veg"
                  />
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
        ),
      },
      {
        name: "Step 2",
        component: (
          <Fragment>
            <br />
            <div>
              <Typography>
                Ingredients (click the + button below to add a new ingredient){" "}
              </Typography>
            </div>
            {ingredients.map((val, idx) => {
              let ingredientId = `ingredient-${idx}`,
                amountId = `amount-${idx}`;
              return (
                <div
                  key={idx}
                  className={classes.display2}
                  onChange={this.handleChange}
                >
                  <br />

                  <div>
                    <input
                      lable={`Ingredient ${idx + 1} `}
                      type="text"
                      name={ingredientId}
                      data-id={idx}
                      id={ingredientId}
                      placeholder={`Ingredient ${idx + 1} `}
                      className="name"
                      value={this.state.ingredients[`${idx}`].name}
                    />
                  </div>
                  <div>
                    <input
                      lable="amount"
                      type="text"
                      name={amountId}
                      data-id={idx}
                      id={amountId}
                      placeholder="quantity"
                      className="amount"
                      value={this.state.ingredients[`${idx}`].amount}
                    />
                  </div>

                  <br />
                </div>
              );
            })}

            <br />

            <Tooltip
              onClick={this.addIngredient}
              title="Add new ingredient"
              style={{ outline: "none" }}
            >
              <Fab color="secondary" aria-label="add" size="small">
                <AddIcon />
              </Fab>
            </Tooltip>

            <div style={{ height: "8vh" }}></div>
          </Fragment>
        ),
      },
      {
        name: "Step 3",
        component: (
          <Fragment>
            <br />
            <div>
              <Typography>
                Instructions (click the + button below to add a new step){" "}
              </Typography>
            </div>
            {instructions.map((val, idx) => {

                let stepId = `step ${idx+1}`;
              return (
                <div
                  key={idx}
                  className={classes.display2}
                  onChange={this.handleChange}
                >
                  <br />

                  <div>
                    <lable htmlFor={stepId}>
                      {stepId}
                    </lable>
                  </div>
                  <div>
                    <input
                      lable="step"
                      type="text"
                      name={stepId}
                      data-id={idx}
                      id={stepId}
                      placeholder="do something "
                      className="step"
                      value={this.state.instructions[`${idx}`].step}
                    />
                  </div>

                  <br />
                </div>
              );
            })}

            <br />

            <Tooltip
              onClick={this.addInstruction}
              title="Add new step"
              style={{ outline: "none" }}
            >
              <Fab color="secondary" aria-label="add" size="small">
                <AddIcon />
              </Fab>
            </Tooltip>

            <div style={{ height: "8vh" }}></div>
         
           
            <br />
            <div align="center" className={classes.but}>
              <Button type="submit" disabled={loading} variant="contained">
                Post Recipe
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </div>
          </Fragment>
        ),
      },
    ];

    return (
      <div>
        {redirect}

        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className={classes.container}
        >
          <div>
            <Typography
              color="secondary"
              className={classes.title}
              variant="h3"
              align="center"
            >
              Add a Recipe
            </Typography>

            
              <div class="step-progress">
                <StepZilla
                  dontValidate={false}
                  showSteps={true}
                  steps={steps}
                />
              </div>
            
          </div>
        </form>
      </div>
    );
  }
}

NewRecipe.propTypes = {
  postRecipe: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { postRecipe, clearErrors })(NewRecipe);

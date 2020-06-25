import React, { useState } from "react";
import PropTypes from "prop-types";

//steps
import IngredientInputs from "./Step2";
import InstructionInputs from "./Step3";
import Details from "./Step1";

// Redux stuff
import { connect } from "react-redux";
import { postRecipe } from "../../redux/actions/dataActions";

//Mui stepper
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//Mui
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3%",
    backgroundColor: "white",
    width: "50vw",
    height:"min-content",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Details", "Ingredients", "Instructions"];
}

function NewRecipe(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Details detailsState={detailsState} handlechange={handlechange} />
        );
      case 1:
        return (
          <IngredientInputs
            ingredientState={ingredientState}
            handleingredientChange={handleingredientChange}
            addingredient={addingredient}
          />
        );
      case 2:
        return (
          <InstructionInputs
            addinstruction={addinstruction}
            instructionState={instructionState}
            handleinstructionChange={handleinstructionChange}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };

  //details
  const [detailsState, setDetailsState] = useState({
    title: "",
    preparationTime: "",
    cookingTime: "",
    serves: "",
    difficultyLevel: "Intermediate",
    body: "",
    type: "nonveg",
    image: null,
    errors: {},
  });

  const handlechange = (e) => {
    e.preventDefault();
    setDetailsState({
      ...detailsState,
      [e.target.name]: e.target.value,
    });
  };

  //ingredients
  const ingredients = { name: "", amount: "" };

  const [ingredientState, setIngredientState] = useState([{ ...ingredients }]);

  const addingredient = () => {
    setIngredientState([...ingredientState, { ...ingredients }]);
  };

  const handleingredientChange = (e) => {
    const updatedingredients = [...ingredientState];
    updatedingredients[e.target.dataset.idx][e.target.className] =
      e.target.value;
    setIngredientState(updatedingredients);
  };

  //instructions
  const instructions = { step: "" };

  const [instructionState, setInstructionState] = useState([
    { ...instructions },
  ]);

  const addinstruction = () => {
    setInstructionState([...instructionState, { ...instructions }]);
  };

  const handleinstructionChange = (e) => {
    const updatedinstructions = [...instructionState];
    updatedinstructions[e.target.dataset.idx][e.target.className] =
      e.target.value;
    setInstructionState(updatedinstructions);
    console.log(instructionState);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //to prevent auto reload
    setActiveStep(3);
    const newRecipe = {
      title: detailsState.title,
      preparationTime: detailsState.preparationTime,
      cookingTime: detailsState.cookingTime,
      serves: detailsState.serves,
      difficultyLevel: detailsState.difficultyLevel,
      body: detailsState.body,
      ingredients: detailsState.ingredients,
      instructions: detailsState.instructions,
      type: detailsState.type,
      pictureUrl: detailsState.image,
    };
    console.log(newRecipe)
    props.postRecipe(newRecipe, props.history);
  };

  return (
    <div className={classes.root}>
      <Typography color="secondary" variant="h3" align="center">
        Add a Recipe
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <CircularProgress> </CircularProgress>
          </div>
        ) : (
          <form autoComplete="off">
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
NewRecipe.propTypes = {
  postRecipe: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { postRecipe })(NewRecipe);

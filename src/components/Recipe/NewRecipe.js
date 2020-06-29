import React, { useState } from "react";
import PropTypes from "prop-types";

//steps
import IngredientInputs from "./Step2";
import InstructionInputs from "./Step3";
import Details from "./Step1";

// Redux stuff
import { connect } from "react-redux";
import { postRecipe } from "../../redux/actions/dataActions";

//firebase
import { storage } from "../../firebase/index";

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
    width: "60vw",
    height: "min-content",
    marginLeft:"20%",
    marginTop:"1%",
    '@media (max-width: 768px)': {
      width: "85vw",
      marginLeft:"7%",
      marginTop:"7%",
    }
    
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
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo(0, 0);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Details
            detailsState={detailsState}
            handleimagechange={handleimagechange}
            handlechange={handlechange}
          />
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

  //image upload
  const handleimagechange = (event) => {
    if (event.target.files[0]) {
      setDetailsState({
        ...detailsState,
        image: event.target.files[0],
      });
    }
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
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //to prevent auto reload
    setActiveStep(3);
    window.scrollTo(0, 0);
   
  
    const imagefilename=new Date().toISOString() + detailsState.image.name;

    const uploadTask = storage.ref(`recipes/${imagefilename}`).put(detailsState.image);
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
          .child(imagefilename)
          .getDownloadURL()
          .then((url) => {
            url = url + "?alt=media";
            const newRecipe = {
              title: detailsState.title,
              preparationTime: detailsState.preparationTime,
              cookingTime: detailsState.cookingTime,
              serves: detailsState.serves,
              difficultyLevel: detailsState.difficultyLevel,
              body: detailsState.body,
              ingredients: ingredientState,
              instructions: instructionState,
              type: detailsState.type,
              pictureUrl: url,
            };
            console.log(newRecipe);
            props.postRecipe(newRecipe, props.history);
          });
      }
    );
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
          <div>
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
          </div>
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

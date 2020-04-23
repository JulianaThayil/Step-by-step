import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label:'A delicious chicken starter recipe, Kalmi Kebab is a mouth-watering appetizer to pick for your next dinner party. It is a popular dish on many restaurant menus as well, but now you can make this sumptuous snack with this simple and easy recipe. ',
    imgPath:
      'https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    label:'This chicken biryani is cooked in coconut oil, which is again a healthier oil as compared to many other oils. Tangy tomato puree and fresh yogurt with a slew of spices and herbs dish out a flavourful and aromatic biryani, just the way you like it.',
    imgPath:
      'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    label:'A refreshing summer delight! Mango basil colada is a perfect beverage to prepare for a sunny treat at home to relish with friends and family. Packed with the goodness of mangoes and basil, this is a sweet treat you would love to keep repeating.',
    imgPath:
      'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    label:'An absolutely flavourful fish recipe for all those who love to dive into succulent spicy pomfret. Here is a quick and super easy pan fried pomfret packed with a host of spices and a tang of lime along with a crispy crust and succulent inside.',
    imgPath:
      'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    label:'A delicious dish to savour on in breakfast! This recipe is a healthy amalgamation of seafood, mornay sauce and assorted herbs. A plate full of taste and health right in your kitchen!',
    imgPath:
      'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 150,
    marginLeft:'5vw',
    marginRight:'5vw',
    flexGrow: 1,
  },
  paper: {
    margin:'1vw',
    padding:'1px',
    textAlign:'center',
    fontHeight:'2px',
    backgroundColor: theme.palette.background.default,
   
  },
  img: {
    minWidth: 150,
    display: 'block',
    height:'50vh',
    overflow: 'hidden',
    width:'100%',
  },
  


}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
     
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
        
      </AutoPlaySwipeableViews>
      <br/>
      <Paper square elevation={0} className={classes.paper}>
      <Typography variant="body2">{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;

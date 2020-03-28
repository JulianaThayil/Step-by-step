import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyRecipes from '../../components/RecipeCard/MyRecipes';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import NewRecipe from './NewRecipe';
import Following from '../../components/Following/FollowingCard'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    width:'900px',
    backgroundColor: theme.palette.background.paper,
    
  },
  
  myStyles: {
    backgroundColor: '#F5F5F5',
    padding:'2%',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    gap: '1% 1%',
  },
  tab:{
    width:'inherit'
  }
  
}));

export default function ProfileTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar  position="static" color="white">
        <Tabs className={classes.tab}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
         
        >
          <Tab label="My Recipes" icon={<MenuBookIcon />} {...a11yProps(0)} />
          <Tab label="Add Recipe" icon={<AddCircleOutlineIcon />} {...a11yProps(1)} />
          <Tab label="Following " icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Saved " icon={<TurnedInNotIcon/>} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.myStyles}>
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
          <MyRecipes></MyRecipes> 
        </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
      //add recipe card
      </TabPanel>

      <TabPanel value={value} index={2}>
      following 
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className={classes.myStyles}>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        <RecipeCard> </RecipeCard>
        </div>
       
      </TabPanel>
     

    </div>
  );
}

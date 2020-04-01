import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//My Components
import MyDetails from './MyDetails';

//pages
import EditProfile from '../../components/Editprofile/EditProfile';
import NewRecipe from '../../components/RecipeCard/NewRecipe';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 300,
    float:'left',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
   
    <MyDetails> </MyDetails>
     <br /> 
    <div className={classes.root}>
 
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="My Profile" {...a11yProps(0)} />
        <Tab label="Edit Profile" {...a11yProps(1)} />
        <Tab label="Add a new Recipe" {...a11yProps(2)} />
        <Tab label="Account" {...a11yProps(3)} />
        <Tab label="Settings" {...a11yProps(4)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        My Recipes
      </TabPanel>

      <TabPanel value={value} index={1}>
       <EditProfile> </EditProfile>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <NewRecipe> </NewRecipe>
      </TabPanel>
      
      <TabPanel value={value} index={3}>
        Account
      </TabPanel>
      <TabPanel value={value} index={4}>
        Settings
      </TabPanel>
    </div>
    </div> 
  );
}

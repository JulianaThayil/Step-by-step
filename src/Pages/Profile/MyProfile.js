import React from 'react'
import Logo from '../../components/Logo/Logo';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfileTabs from './Tabs';
import EditProfile from '../../components/Editprofile/EditProfile';
import UserDetails from './UserDetails';

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

const useStyles = makeStyles(theme => ({
  
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  container:{
    position:'absolute',
    marginLeft:'8%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  
}));

export default function MyProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (

      <div className={classes.container} > 
      <UserDetails> </UserDetails> 
      
       <div className={classes.root}>
       <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="My Profile" {...a11yProps(0)} />
        <Tab label="Edit Profile" {...a11yProps(1)} />
        <Tab label="Settings" {...a11yProps(2)} />
        <Tab label="Account" {...a11yProps(3)} />
        
      </Tabs>
     
      <TabPanel value={value} index={0}>
        
        <ProfileTabs> </ProfileTabs>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EditProfile></EditProfile>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    
      </div>
         
          </div>
  );
}


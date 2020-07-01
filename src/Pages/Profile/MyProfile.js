import React, { Fragment,useEffect } from "react";
import PropTypes from "prop-types";
import MyDetails from "./Details";
import RecipesPosted from "./RecipesPosted";

//Mui
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BookmarkIcon from "@material-ui/icons/Bookmark";

//Redux
import { connect } from "react-redux";
import { getUserData } from "../../redux/actions/dataActions";


//Tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "8%",
    marginRight: "8%",
    backgroundColor: theme.palette.background.paper,
  },
  highlight: {
    "&:focus": {
      outline: "none",
    },
  },
}));
//end of tab code

function MyProfile(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
 
  useEffect(() => {
    const handle = props.handle;
    props.getUserData(handle);
    
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Fragment>
      <MyDetails></MyDetails>

      <div className={classes.root}>
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab
              icon={<ListAltIcon />}
              className={classes.highlight}
              label="My Recipes"
              {...a11yProps(0)}
            />
            <Tab
              icon={<BookmarkIcon />}
              className={classes.highlight}
              label="Saved Recipes"
              {...a11yProps(1)}
            />
          </Tabs>
        </Paper>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <RecipesPosted
            handle={props.user.credentials.handle}
            ></RecipesPosted>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Saved Recipes
          </TabPanel>
        </SwipeableViews>
      </div>
    </Fragment>
  );
}

MyProfile.propTypes = {
  handle: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

export default connect(mapStateToProps,{ getUserData })(MyProfile);

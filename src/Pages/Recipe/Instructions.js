import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./styles.module.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//Mui stuff


export default class Instructions extends Component {
  render() {
    const {
      instruction: { step },
      step_number
    }
     = this.props;
   

    return (
        <List >
        <ListItem>
          <ListItemIcon>
            {step_number}
          </ListItemIcon>
          <ListItemText
            primary={step}
          />
        </ListItem>
      
      </List>
    );
  }
}
Instructions.propTypes = {
  instruction: PropTypes.object.isRequired,
  step_number: PropTypes.string.isRequired
};



import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./styles.module.css";

//Mui stuff
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";

export default class Instructions extends Component {
  render() {
    const {
      instruction: { step },
      step_number,
    } = this.props;

    return (
      <Card >
        <List>
          <ListItem>
            <ListItemIcon>
              <div className={classes.circle}> {step_number}</div>
            </ListItemIcon>
            <ListItemText primary={step} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Card>
    );
  }
}
Instructions.propTypes = {
  instruction: PropTypes.object.isRequired,
  step_number: PropTypes.string.isRequired,
};

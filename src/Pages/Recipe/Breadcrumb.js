import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SimpleBreadcrumbs(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/">
        <Typography variant="subtitle2" color="textSecondary">
          {" "}
          StepChef
        </Typography>
      </Link>
      <Link color="inherit" to="/explore">
        <Typography variant="subtitle2" color="textSecondary">
          {" "}
          {props.category}
        </Typography>
      </Link>
      <Typography variant="subtitle2" color="textSecondary">
        {props.title}
      </Typography>
    </Breadcrumbs>
  );
}
SimpleBreadcrumbs.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

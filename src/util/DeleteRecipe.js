import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import MyButton from './MyButton';

// MUI Stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

import { connect } from 'react-redux';
import { deleteRecipe } from '../redux/actions/dataActions';

const styles = {
  deleteButton: {
    position: 'relative',
    left: '10%',
    top: '1%'
  }
};

class DeleteRecipe extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  deleteRecipe = () => {
    this.props.deleteRecipe(this.props.recipeId);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <MyButton
          tip="Delete Recipe"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="secondary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Are you sure you want to delete this recipe ?
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteRecipe} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

DeleteRecipe.propTypes = {
  deleteRecipe: PropTypes.func.isRequired,
  recipeId: PropTypes.string.isRequired
};

export default connect(
  null,
  { deleteRecipe }
)(withStyles(styles)(DeleteRecipe));
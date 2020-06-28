import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
// MUI Stuff
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// Redux stuff
import { connect } from 'react-redux';
import { submitComment, clearErrors } from '../redux/actions/dataActions';

const styles = () => ({
  CommentForm:{
    display:'inline',
  },
  button:{
    marginLeft:'20px'
  },
  comment:{
    width:'90%'
  }
});

class CommentForm extends Component {
  state = {
    body: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: '' });
    
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.state.errors = false
    
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitComment(this.props.recipeId, { body: this.state.body });
    this.props.clearErrors();
    this.state.errors = false
  };

  render() {
    const { classes, authenticated } = this.props;
    const errors = this.state.errors;

    const commentFormMarkup = authenticated ? (
      <Grid item  >
        <form onSubmit={this.handleSubmit} className={classes.CommentForm}>
         
        <TextField
            id="outlined-multiline-flexible"
            lable="Comment"
            multiline
            fullWidth
            placeholder="Post a review"
            variant="outlined"
            name="body"
            type="text"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.body}
            onChange={this.handleChange}
            className={classes.comment}
          />
          <br/>
          <Button style={{ marginTop:'1%'}}
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Submit
          </Button>
          
        </form>
        <hr  />
      </Grid>
    ) : null;
    return commentFormMarkup;
  }
}

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
  recipeId: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated
});

const mapActionsToProps = {
  submitComment,
  clearErrors
};

export default connect(
  mapStateToProps,
  mapActionsToProps)
(withStyles(styles)(CommentForm));
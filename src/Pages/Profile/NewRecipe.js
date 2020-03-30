import React, { Component } from 'react'
import classes from '../../components/Editprofile/Editprofile.module.css';
import PropTypes from 'prop-types';

//Mui stuff
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';


// Redux stuff
import { connect } from 'react-redux';
import { postRecipe, clearErrors } from '../../redux/actions/dataActions';


class NewRecipe extends Component {
  constructor() {
    super();
    this.state = {
      title:'',
      cookingTime:'',
      serves:'',
      body:'',
      ingredients:'',
      intructions:'',
      errors: {}
  };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const newRecipe = {
      title: this.state.title,
      cookingTime: this.state.cookingTime,
      serves: this.state.serves,
      body: this.state.body,
      ingredients: this.state.ingredients,
      intructions: this.state.intructions,
    };
    this.props.postRecipe( newRecipe );
    
  };

  render() {
    const { errors } = this.state;
    const {
      UI: { loading }
    } = this.props;

    return (
      <div style={{  backgroundImage:'url(./assets/marble.jpg)' }}>
        <form className={classes.root} autoComplete="off" onSubmit={this.handleSubmit}>
         <div className={classes.main}>

         <TextField name="title"  required label="Title" variant="filled" 
         value={this.state.title}
         onChange={this.handleChange}
         />
         <br/>

         <TextField required name="cookingTime" size="small" variant="filled" 
         value={this.state.cookingTime}
         onChange={this.handleChange} 
         /> 
         <br/>

         <TextField
         required
         name="serves"
          size="small"
          label="Serves"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled" 
          value={this.state.serves}
          onChange={this.handleChange}
        />
        <br/>

        <TextField required name="body" rows="3" 
        value={this.state.body}
        onChange={this.handleChange} variant="filled" /> 

        <br/>
      <TextField
          required
          name="ingredients"
          label="Ingredients"
          placeholder="Add each ingredient on a new line"
          rows="4"
          multiline
          value={this.state.ingredients}
          onChange={this.handleChange}
          variant="filled" 
        />
        <br/>
        <TextField
          required
          name="intructions"
          label="Instructions"
          placeholder="Add each instruction on a new line"
          rows="4"
          multiline
          value={this.state.intructions}
          onChange={this.handleChange}
          variant="filled" 
        />

         <br/>

         <Button
                type="submit"
                disabled={loading}
                variant="contained"
                color="primary"
              >
                Post 
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>


           </div>
           </form>
        
      </div>
    )
  }
}

NewRecipe.propTypes = {
  postRecipe: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { postRecipe, clearErrors }
)(NewRecipe);

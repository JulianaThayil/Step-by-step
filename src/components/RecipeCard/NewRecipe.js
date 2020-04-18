import React, { Component } from 'react'
import classes from './RecipeCard.module.css';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
//firebase
import {storage} from '../../firebase/index';

//Mui stuff
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

//icons
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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
      ingredients:[{name:"", amount:""}],
      instructions:'',
      image:null,
      errors: {}
  };
  }
  addIngredient = (e) => {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, {name:"", amount:""}],
    }));
  }
  
  handlePicture = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleChange = (e) => {

    if (["name", "amount"].includes(e.target.className) ) {

      let ingredients = [...this.state.ingredients]   
      ingredients[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ ingredients })

    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  };

  handleSubmit = (event) => {
    event.preventDefault(); //to prevent auto reload
    this.setState({
      loading: true
    });
    const {image} = this.state;

    const uploadTask = storage.ref(`recipes/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('recipes').child(image.name).getDownloadURL().then(url => {
            url=url + '?alt=media';
            const newRecipe = {
              title: this.state.title,
              cookingTime: this.state.cookingTime,
              serves: this.state.serves,
              body:this.state.body,
              ingredients: this.state.ingredients,
              instructions: this.state.instructions,
              pictureUrl: url,
            };
            this.props.postRecipe(newRecipe )       
        })
        
    });
    

  };

  render() {
    const { errors,ingredients } = this.state;
    const {
      
      UI: { loading }
    } = this.props;

    
    return (
    

      <div >
        <form  autoComplete="off" onSubmit={this.handleSubmit} className={classes.newform}>
  
        <Typography  variant="h4" align="center"> 
             Submit a Recipe
        </Typography >
        <br/>
        
      <div className={classes.image} align='center'>       
          <PhotoCamera />
          <input accept="image/*" className={classes.ip}  id="imageInput" 
      onChange={this.handlePicture}
      type="file" 
      />
      
      </div> 
    
      <br />
      <TextField name="title"  required label="Name of your dish" variant="filled" 
         value={this.state.title}
         fullWidth
         onChange={this.handleChange}
         />

         <br/>
         <br/>
         <div className={classes.display}> 
         <TextField required name="cookingTime"  label="Cooking time: "  
        value={this.state.cookingTime}
        onChange={this.handleChange} variant="filled" /> 

        {"   "}
         <TextField
         required
         name="serves"
          label="Serves"
          type="number"
          InputLabelProps={{
            
          }}
          variant="filled" 
          value={this.state.serves}
          onChange={this.handleChange}
        />

         </div>
        <br/>
         <br/>

        

        <TextField required name="body"  label="Description " rows="3" 
        value={this.state.body}
        fullWidth
        onChange={this.handleChange} variant="filled" /> 

         <br/>
         <br/>
         <Typography>Ingredients (click the + button below to add a new ingredient) </Typography>

         {
          ingredients.map((val, idx)=> {
            let ingredientId = `ingredient-${idx}`, amountId = `amount-${idx}`
            return (
              <div key={idx} className={classes.display} onChange={this.handleChange}>
              <br/>
                <input
                  lable={`Ingredient ${idx + 1} `}
                  type="text"
                  name={ingredientId}
                  data-id={idx}
                  id={ingredientId}
                  placeholder={`Ingredient ${idx + 1} `}
                  className="name"
                />
                {"   "}
                <input
                  lable="amount"
                  type="text"
                  name={amountId}
                  data-id={idx}
                  id={amountId}
                  placeholder="amount"
                  className="amount"

                />
                 <br/>
             </div>
            
              
            )
          })
        }

         <br/>
         <Tooltip onClick={this.addIngredient} title="Add new ingredient" style={{ outline:'none'}}>
            < Fab color="secondary" aria-label="add" size="small"  >
            <AddIcon />
            </Fab>
         </Tooltip>
      
        <br/>
         <br/>
        <TextField
          name="instructions"
          label="Instructions"
          placeholder="Add each instruction on a new line"
          rows="4"
          multiline
          fullWidth
          value={this.state.instructions}
          onChange={this.handleChange}
          variant="filled" 
        />

         <br/>
         <br/>
        <div align='center'>
         <Button 
                type="submit"
                disabled={loading}
                variant="contained"
       
              >
                Post 
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                 
                 )
                }
              
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

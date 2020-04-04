import React, { Component } from 'react'
import classes from '../../components/Settings/Editprofile/Editprofile.module.css';
import PropTypes from 'prop-types';

//firebase
import {storage} from '../../firebase/index';

//Mui stuff
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

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
      ingredients:'',
      intructions:'',
      image:null,
      errors: {}
  };
  }
  
  handlePicture = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
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
            console.log(url)
            const newRecipe = {
              title: this.state.title,
              cookingTime: this.state.cookingTime,
              serves: this.state.serves,
              body:this.state.body,
              ingredients: this.state.ingredients,
              intructions: this.state.intructions,
              pictureUrl: url,
            };
            this.props.postRecipe(newRecipe );
        })
        
    });

    


  };

  render() {
    const { errors } = this.state;
    const {
      
      UI: { loading }
    } = this.props;

    
    return (
    

      <div style={{  backgroundImage:'url(https://i.pinimg.com/564x/dd/c9/68/ddc96843d58dd6928da23220bb94507f.jpg)' }}>
        <form className={classes.root} autoComplete="off" onSubmit={this.handleSubmit}>
         <div className={classes.main}>

         <TextField name="title"  required label="Name of your dish" variant="filled" 
         value={this.state.title}
         onChange={this.handleChange}
         />

         <br/>
         <TextField required name="cookingTime"  label="Preparation time: "  
        value={this.state.cookingTime}
        onChange={this.handleChange} variant="filled" /> 

        <br/>

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
        <br/>

        <TextField required name="body"  label="Description " rows="3" 
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

  
      <input required accept="image/*" className={classes.ip}  id="imageInput" 
      onChange={this.handlePicture}
      type="file" 
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

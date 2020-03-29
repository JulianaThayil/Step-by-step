import React, { Component } from 'react';
import classes from './RecipeCard.module.css';
import PropTypes from 'prop-types';

//Mui stuff
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';


class MyRecipes extends Component {
  render(){
 
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image=""
        title="Paella dish"
      />
      <CardContent>
          <h5> Name of dish</h5>
          <p> Cooking time: </p> 
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}
}
export default MyRecipes;
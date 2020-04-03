import React, { Component,Fragment} from 'react';
import classes from './RecipeCard.module.css';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import MyButton from '../../util/MyButton';
import LikeButton from '../../util/LikeButton';
import DeleteRecipe from '../../util/DeleteRecipe';
import {Link} from 'react-router-dom';

//MUI stuff
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';

// Icon
import ChatIcon from '@material-ui/icons/Chat';

//Redux stuff
import { connect } from 'react-redux';

class MyRecipes extends Component {
  render(){
    dayjs.extend(relativeTime);
    const {
      recipe: {
        title,
        body,
        pictureUrl,
        createdAt,
        userHandle,
        recipeId,
        likeCount,
        commentCount
      },
      user: {
        authenticated,
        credentials: { handle }
      }
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteRecipe recipeId={recipeId} />
      ) : null;


  return (
 
    <Card className={classes.root}  >
      <CardHeader 
        
        title={title}
        subheader= {dayjs(createdAt).fromNow()}
      />
      <CardMedia
        className={classes.media}
        component={Link} to={`/users/${userHandle}/${recipeId}`}
        image={pictureUrl}
  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
      <LikeButton recipeId={recipeId} />
          <span>{likeCount} </span>

          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount}</span>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Fragment>
        {deleteButton}
        </Fragment>
        
      </CardActions>
    </Card>
  
  );
}
}

MyRecipes.propTypes = {
  user: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(MyRecipes);
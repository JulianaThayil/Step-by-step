import React, { Component,Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import UserNavbar from '../../components/Navbar/userNavbar'
import PropTypes from 'prop-types';
import classes from './styles.module.css';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import LikeButton from '../../util/LikeButton';
import MyButton from '../../util/MyButton';
import Comments from '../../util/Comments';
import CommentForm from '../../util/CommentForm';
import Footer from '../../components/Footer/Footer'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


//Mui stuff
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

//icons
import ChatIcon from '@material-ui/icons/Chat';

//redux
import { connect } from 'react-redux';
import { getRecipe } from '../../redux/actions/dataActions';

class viewRecipe extends Component {
  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    this.props.getRecipe(recipeId);
  }

    render() {
        const {
            user: {
              authenticated
            },
            recipe: {
                recipeId,
                title,
                cookingTime,
                serves,
                body,
                ingredients,
                instructions,
                pictureUrl,
                createdAt,
                likeCount,
                commentCount,
                userImage,
                userHandle,
                comments
              },
              UI: { loading }
          } = this.props;

          let loginsignup=
          authenticated ? (null):
          (<span > 
            
            <Link to="/login"> Sign in </Link> or
            <Link to="/signup"> Create a step-by-step account </Link>
            to add your review
            </span> );

          let NavigationBar = 
            authenticated ? (
                <UserNavbar> </UserNavbar>
                ) : (
                    <Navbar> </Navbar>);

          let recipesMarkup = !loading ? (
            <div> 
            <div className={classes.body} >
 
    <Breadcrumbs aria-label="breadcrumb" style={{backgroundColor:'white' }}>
      <Link color="inherit" to="/">
        Step-by-step
      </Link>
      <Link color="inherit" to={`/users/${userHandle}`}>
        {userHandle}
      </Link>
      <Typography
        color="textPrimary"
        aria-current="page"
      >
        {title}
      </Typography>
    </Breadcrumbs>
   

              <Typography variant="h2"> 
              {title}
              </Typography>
             
              by
            <Typography
            component={Link}
            color="secondary"
            variant="h6"
            to={`/users/${userHandle}`}
          >
             @{userHandle}
          </Typography>

          <br />
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
          </Typography>

          <LikeButton recipeId={recipeId} />
          <span>{likeCount} likes</span>

          <MyButton tip="reviews">
            <ChatIcon color="secondary"/>
          </MyButton>
          <span>{commentCount} Reviews</span>

              <Typography lable="Cooking Time ">
                {cookingTime}
              </Typography>

              <Typography lable="Serves ">
                {serves}
              </Typography>
            
          <img src={pictureUrl}  width="70%" height="40%"/> 

          <Typography> 
            {body}
          </Typography>

          <Typography>
            {ingredients}
          </Typography>

          <Typography>
            {instructions}
          </Typography>

          <Typography variant="h5">
            Reviews
            </Typography> 

            {loginsignup}
           <br />
          <MyButton tip="reviews">
            <ChatIcon color="secondary" />
          </MyButton>
          <span>{commentCount} Reviews</span>
          <CommentForm recipeId={recipeId} />
          {comments && <Comments comments={comments} />}
          
          </div>
          <br /> 
          <Footer> </Footer>
          
          </div>

          ) : (
                     <CircularProgress style={{left:'50%',top:'50%'}}/> 
          );              
                          

        return (
            
            <div>
            {NavigationBar}
           <div>  
           {recipesMarkup}
           </div> 
           
          
            </div>
        )
    }
}

viewRecipe.propTypes = {
    user: PropTypes.object.isRequired,
    getRecipe: PropTypes.func.isRequired,
    recipeId: PropTypes.string.isRequired,
    userHandle: PropTypes.string.isRequired,
    recipe: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
  };
  

const mapStateToProps = (state) => ({
    user: state.user,
    recipe: state.data.recipe,
    UI: state.UI
  });
  const mapActionsToProps = {
    getRecipe
    };
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(viewRecipe);
  

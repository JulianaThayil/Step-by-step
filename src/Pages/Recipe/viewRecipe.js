import React, { Component,Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import UserNavbar from '../../components/Navbar/userNavbar'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import LikeButton from '../../util/LikeButton';
import MyButton from '../../util/MyButton';
import Comments from '../../util/Comments';
import CommentForm from '../../util/CommentForm';
import Footer from '../../components/Footer/Footer'


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

          let NavigationBar = 
            authenticated ? (
                <UserNavbar> </UserNavbar>
                ) : (
                    <Navbar> </Navbar>);

          let recipesMarkup = !loading ? (
            <Fragment>

              <Typography variant="h2"> 
              {title}
              </Typography>

              <Typography>
                {cookingTime}
              </Typography>

              <Typography>
                {serves}
              </Typography>

            <Typography
            component={Link}
            color="primary"
            variant="h5"
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

         

          <Typography> 
            {body}
          </Typography>

          <img src={pictureUrl} /> 

          <Typography>
            {ingredients}
          </Typography>

          <Typography>
            {instructions}
          </Typography>

          <MyButton tip="Reviews">
            <ChatIcon color="primary" />
          </MyButton>
         


          <br /> 
          <Footer> </Footer>
          
          </Fragment>

          ) : (
                     <CircularProgress style={{left:'50%',top:'50%'}}/> 
          );              
                          

        return (
            
            <div>
            {NavigationBar}

           {recipesMarkup}
           
          
            </div>
        )
    }
}

viewRecipe.propTypes = {
    comments: PropTypes.array.isRequired,
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
  

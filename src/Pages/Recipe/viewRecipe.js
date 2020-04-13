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
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
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

          let loginsignup =
          authenticated ?
          null:
          (
            <div> 
            <ChatIcon color="secondary" />
            <span> 
            <Link to="/login" > Sign-in </Link> or
            <Link to="signup"> create your step-by-step account</Link> to post a review
            </span>
            </div>

          );

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
   

              <Typography variant="h4"  className={classes.text} style={{alignSelf:'center'}}> 
              {title}
              </Typography>

          
      <Paper  >
      <div  className={classes.paper}> 
        <Grid container spacing={2}  >
          <Grid item>
            <div className={classes.image1}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="image" src={pictureUrl}  />
            </ButtonBase>
            </div>
            
            
                <LikeButton recipeId={recipeId} />
                <span className={classes.text} >{likeCount} likes</span>
              
                <MyButton tip="Reviews">
                  <ChatIcon color="primary" />
                </MyButton>
                <span className={classes.text}>{commentCount} Reviews</span>
                
                <br/>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.text}
                
                 component={Link}
                 color="primary"
                 variant="h6"
                 to={`/users/${userHandle}`}
          >
             @{userHandle}
              
                </Typography>
                <br/>
                <Typography variant="body2" color="textSecondary" className={classes.text}>
            {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
          </Typography>
                <br />
               
                <Typography variant="h7" gutterBottom className={classes.text} >
                Serves: {serves}
                </Typography>
                <br/>
                <Typography variant="h7"  className={classes.text}>
                Preparation time: {cookingTime}
                </Typography>
                <br/>
                <br/>
                
<Typography variant="h7" className={classes.text}>
                Description:
                </Typography>
<Typography variant="body2" style={{ cursor: 'pointer' }}>
                {body}
                </Typography>

                
                
               
              </Grid>
              
            </Grid>
          
          </Grid>
        </Grid>
     
        <br />
<Typography variant="h7" className={classes.text}>
               Ingredients:
                </Typography>
          <Typography variant="body2" style={{ cursor: 'pointer' }}>
           {ingredients}
          </Typography>
<br/>
<Typography variant="h7" className={classes.text}>
              Instructions:
                </Typography>
          <Typography variant="body2" style={{ cursor: 'pointer' }}>
            {instructions }
          </Typography>

          </div>
          </Paper>
         
          <br/>

         
          <Typography variant="h5" className={classes.text}> 
            Reviews
          </Typography>
         
                <span>{commentCount} Reviews </span>
                <br />

          {loginsignup}
          <br />
          
          <CommentForm recipeId={recipeId} />
          {comments && <Comments comments={comments} />}
        
          </div>
          <br /> 
          <Footer> </Footer>
          
          </div>

          ) : (
            <LinearProgress color="secondary" />
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
  

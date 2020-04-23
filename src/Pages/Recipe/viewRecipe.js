import React, { Component} from 'react';
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
import Ingredient from './Ingredient';

//Mui stuff
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
                preparationTime,
                cookingTime,
                difficultyLevel,
                serves,
                body,
                ingredients,
                instructions,
                type,
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
          var ingredientsMarkup=null;
            {
              ingredients &&
              (ingredientsMarkup = 
            ingredients.map((ingredient) => <Ingredient key={ingredient.name} ingredient={ingredient} />)
              )
            }
          var vegnonveg=type==="veg"?(
          <span className={classes.span}><img width="4%" height="4%" src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-1.png" alt="veg"/> <p> Veg</p></span>)
          :(<span className={classes.span}><img width="4%" height="4%" src="https://img.icons8.com/color/480/non-vegetarian-food-symbol.png" alt="nonveg"/><p> Non-Veg</p></span>);  

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
      <Link color="inherit" to={`/${userHandle}`}>
        {userHandle}
      </Link>
      <Typography
        color="textPrimary"
        aria-current="page"
      >
        {title}
      </Typography>
    </Breadcrumbs>
   
    <Paper  >
    <div  className={classes.viewrecipepaper}> 
              <p className={classes.title} > 
              {title}
              </p>
         
              <Typography   variant="body2" 
                 component={Link}
                 color="primary"
                 to={`/${userHandle}`}
               >
                 by @{userHandle}
              
                </Typography  >
  
                <Typography  variant="body2" color="textSecondary" className={classes.text}>
            {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
          </Typography>

          
     
     
        <Grid container   >
          <Grid item>
            <div >
            <ButtonBase >
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
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
                <br/>
               <div className={classes.details}> 
               <div className={classes.span}> 
               <div className={classes.serves}> </div>
                <Typography variant="h7" className={classes.text} >
                Serves : {serves}
                </Typography>
              
                </div>
                </div>
                <br/>
                
                <div className={classes.details}> 
                <div className={classes.span}> 
               <div className={classes.clock}> </div>
                <Typography variant="h7"  className={classes.text}>
                Preparation time : 
                </Typography>
                <Typography  variant="body2" >
                {preparationTime}
                </Typography>
          <p style={{paddingLeft:'5%'}}> {" "}</p>
                <Typography variant="h7"  className={classes.text}>
                Cook time :
                </Typography>
                <Typography  variant="body2" >
                {cookingTime}
                </Typography>
                </div>
                </div> 
               
                <div className={classes.details}> 
                <div className={classes.span}> 
               <div className={classes.level}> </div>
                <Typography variant="h7"  className={classes.text}>
                Difficulty Level : {difficultyLevel}
                </Typography>
                </div>
                </div> 
                <br/>
                <br/>
                <div className={classes.details}> 
                <Typography variant="h7"  className={classes.text}>
                {vegnonveg}
                </Typography>
               </div>
                <br/>

              
                <div className={classes.details}>     
<Typography variant="h7" className={classes.text}>
                Description:
                </Typography>
                </div>
                <div className={classes.details}>  
<Typography variant="body2" >
                {body}
                </Typography>
                </div>

              </Grid>
              
            </Grid>
          
          </Grid>
        </Grid>
     
        <br />
        <div className={classes.display}> 
        <div>
        <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead className={classes.head}>
          <TableRow >
            <TableCell style={{color:'white'}}>Ingredient</TableCell>
            <TableCell style={{color:'white'}} >Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ingredientsMarkup}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    
<div className={classes.instructions}> 
<Typography variant="h5" className={classes.text} align="center">
              Instructions:
                </Typography>
          <p className={classes.instructionstext}>
                {instructions}
                </p>
</div>

          </div>
         <br/>
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
          </Paper>
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
  

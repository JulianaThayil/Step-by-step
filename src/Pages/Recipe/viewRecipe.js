import React, { Component } from "react";
import Navbar from "../../components/Navbar/Nav";
import PropTypes from "prop-types";
import classes from "./styles.module.css";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import LikeButton from "../../util/LikeButton";
import MyButton from "../../util/MyButton";
import Comments from "../../util/Comments";
import CommentForm from "../../util/CommentForm";
import Footer from "../../components/Footer/Footer";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Ingredient from "./Ingredient";

//Mui stuff
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
//icons
import ChatIcon from "@material-ui/icons/Chat";

//redux
import { connect } from "react-redux";
import { getRecipe } from "../../redux/actions/dataActions";

class viewRecipe extends Component {
  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    this.props.getRecipe(recipeId);
  }

  render() {
    const {
      user: { authenticated },
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
        comments,
      },
      UI: { loading },
    } = this.props;
    var ingredientsMarkup = null;
    {
      ingredients &&
        (ingredientsMarkup = ingredients.map((ingredient) => (
          <Ingredient key={ingredient.name} ingredient={ingredient} />
        )));
    }
    var vegnonveg =
      type === "veg" ? (
       <Typography>
          <img
            width="4%"
            height="4%"
            src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-1.png"
            alt="veg"
          />{" "}
          VEG
          </Typography>
        
      ) : (
        <Typography>
          <img
            width="4%"
            height="4%"
            src="https://img.icons8.com/color/480/non-vegetarian-food-symbol.png"
            alt="nonveg"
          />{" "}
          NON-VEG
          </Typography>
      );

    let loginsignup = authenticated ? null : (
      <div>
        <ChatIcon color="secondary" />
        <span>
          <Link to="/login"> Sign-in </Link> or
          <Link to="/signup"> create your step-by-step account</Link> to post a
          review
        </span>
      </div>
    );

    let recipesMarkup = !loading ? (
      <div>
        <br />

        <div>
<Paper className={classes.viewrecipepaper}>
  <div align="center">
  <Typography variant ="h4" align="center" color="secondary"  >{title}</Typography>
  <Typography    
  variant="body1"
  align="center"
  component={Link}
  color="primary"
  to={`/${userHandle}`}>
     by @{userHandle}</Typography>
  <Typography variant="body2"   align="center" color="textSecondary">
                  {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}</Typography>
                  <Typography >
                          {body}
                        </Typography>
                        <br/>
                  <Container  >
                          <img
                          className={classes.recipeimage}
                            alt="image"
                            src={pictureUrl}
                          />
                        </Container>
<br/>
                        <div className={classes.detail}>
      <Grid container>
        <Grid item xs={4}>
        <Typography  variant="body2"> <LikeButton recipeId={recipeId} />
                          {likeCount} LIKES</Typography>
                      
        </Grid>
        <Grid item xs={4}>
        <Typography  variant="body2" >
                          <MyButton tip="Reviews">
                            <ChatIcon color="primary" />
                          </MyButton>
                            {commentCount} REVIEWS
                            </Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography  variant="body2">
                            {vegnonveg}
                            </Typography>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs> <Typography  variant="body2">
                              SERVES :{serves}
                           </Typography>
        </Grid>
        <Grid item xs>
        <Typography  variant="body2">
                           PREPARATION TIME : {preparationTime}
                           </Typography>
        </Grid>
        <Grid item xs>
        <Typography  variant="body2">
                          COOK TIME : {cookingTime}
                           </Typography>
        </Grid>
        <Grid item xs>
        <Typography  variant="body2">
        DIFFICULTY LEVEL: {difficultyLevel}
                           </Typography>
        </Grid>
      </Grid>
    </div>
                       <br/>

                           <Grid xs={12} sm container direction="row">
                <Grid item sm>
                  <div className={classes.ingredients}>
                    <TableContainer component={Paper}>
                      <Table size="small" aria-label="a dense table">
                        <TableHead className={classes.head}>
                          <TableRow>
                            <TableCell style={{ color: "white" }}>
                              <h7 className={classes.textstyle}>INGREDIENT</h7>
                            </TableCell>
                            <TableCell style={{ color: "white" }}>
                              <h7 className={classes.textstyle}>QUANTITY</h7>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>{ingredientsMarkup}</TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </Grid>
                <Grid item sm>
                  <div className={classes.instructions}>
                    <Typography variant="h5" align="center">
                      <h7 className={classes.textstyle}> INSTRUCTIONS: </h7>
                    </Typography>
                    <p className={classes.textstyle}> {instructions} </p>
                  </div>
                </Grid>
              </Grid>
                  </div>

              <br />
              <br />
              <div>
                <Typography variant="h5" className={classes.text}>
                  <h7 className={classes.textstyle}>Reviews</h7>
                </Typography>

                <span className={classes.textstyle}>
                  {commentCount} Reviews{" "}
                </span>
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
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <CircularProgress color="secondary"> </CircularProgress>
      </div>
    );

    return (
      <div>
        <Navbar> </Navbar>

        <div> {recipesMarkup}</div>
      </div>
    );
  }
}

viewRecipe.propTypes = {
  user: PropTypes.object.isRequired,
  getRecipe: PropTypes.func.isRequired,
  recipeId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  recipe: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  recipe: state.data.recipe,
  UI: state.UI,
});
const mapActionsToProps = {
  getRecipe,
};

export default connect(mapStateToProps, mapActionsToProps)(viewRecipe);

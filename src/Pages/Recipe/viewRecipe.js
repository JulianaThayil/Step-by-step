import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import classes from "./styles.module.css";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import LikeButton from "../../util/LikeButton";
import ShareButtons from "../../util/ShareButtons";
import MyButton from "../../util/MyButton";
import Comments from "../../util/Comments";
import CommentForm from "../../util/CommentForm";
import Ingredient from "./Ingredient";
import Instruction from "./Instructions";
//import NutritionInfo from "./NutritionInfo";
import Breadcrumb from "./Breadcrumb";

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
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

//icons
import ChatIcon from "@material-ui/icons/Chat";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import TimerIcon from "@material-ui/icons/Timer";
import RestaurantIcon from "@material-ui/icons/Restaurant";

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
        courses,
        cuisines,
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
        notes,
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

    var instructionsMarkup = null;
    {
      instructions &&
        (instructionsMarkup = instructions.map((instruction, num) => (
          <Instruction
            key={instruction.step}
            instruction={instruction}
            step_number={`${num + 1}`}
          />
        )));
    }

    var vegnonveg =
      type === "veg" ? (
        <Typography variant="body2">
          <img
            width="20px"
            height="20px"
            src="https://pngimage.net/wp-content/uploads/2018/06/veg-icon-png-1.png"
            alt="veg"
          />{" "}
          VEG
        </Typography>
      ) : (
        <Typography variant="body2">
          <img
            width="20px"
            height="20px"
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
          <Link to="/signup"> create a stepchef account</Link> to post a review
        </span>
      </div>
    );

    let recipesMarkup = !loading ? (
      <div>
        <br />
        <Paper className={classes.viewrecipepaper}>
          <br />
          <Breadcrumb title={title} category={courses}>
            {" "}
          </Breadcrumb>
          <div align="center">
            <br />
            <div className={classes.icon}> </div>
            <h2 className={classes.title} align="center">
              {title}
            </h2>
            {vegnonveg}
            <Grid container justify="center">
              <Grid item xs={6} lg={2}>
                By:{` `}
                <Typography
                  variant="body1"
                  align="center"
                  component={Link}
                  color="primary"
                  to={`/${userHandle}`}
                >
                  @{userHandle}
                </Typography>
              </Grid>
              |
              <Grid item xs={6} lg={2}>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                >
                  {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
                </Typography>
              </Grid>
            </Grid>

            <br />
            <ShareButtons
              quote={body}
              subject={title}
              url={`https://stepchef.netlify.app/${userHandle}/${recipeId}`}
              pictureUrl={pictureUrl}
            />
            <br />
            <Container>
              <picture>
                <img
                  align="center"
                  className={classes.recipeimage}
                  alt="image"
                  src={pictureUrl}
                  srcSet={pictureUrl}
                />
              </picture>
            </Container>
            <Grid container justify="center">
              <Grid item>
                <Typography variant="body2">
                  {" "}
                  <LikeButton recipeId={recipeId} />
                  {likeCount} LIKES
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  <MyButton tip="Reviews">
                    <ChatIcon color="Primary" />
                  </MyButton>
                  {commentCount} REVIEWS
                </Typography>
              </Grid>
            </Grid>

            <br />

            <div className={classes.padding}>
              <Typography align="left" paragraph="true">
                {body}
              </Typography>
            </div>
            <Grid className={classes.padding} container spacing={2}>
              <Grid item xs={6} lg={3}>
                <Avatar>
                  <RestaurantIcon />
                </Avatar>
                <Typography variant="body2">
                  LEVEL: {difficultyLevel}
                </Typography>
              </Grid>

              <Grid item xs={6} lg={3}>
                <Avatar>
                  <TimerIcon />
                </Avatar>
                <Typography variant="body2">
                  PREP TIME : {preparationTime}
                </Typography>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Avatar>
                  <TimerIcon />
                </Avatar>
                <Typography variant="body2">
                  COOK TIME : {cookingTime}
                </Typography>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Avatar>
                  <RoomServiceIcon />
                </Avatar>
                <Typography variant="body2">SERVES :{serves}</Typography>
              </Grid>
            </Grid>
          </div>
          <br />
          <Grid xs={12} sm container direction="row">
            <Grid item sm>
              <Typography variant="h5" align="center">
                <h7 className={classes.instructionstext}> INGREDIENTS: </h7>
              </Typography>
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
              <Typography variant="h5" align="center">
                <h7 className={classes.instructionstext}> INSTRUCTIONS: </h7>
              </Typography>
              <div className={classes.ingredients}>{instructionsMarkup}</div>
            </Grid>
          </Grid>
          <br />

          {notes && (
            <div className={classes.padding}>
              <Typography align="left" variant="h5">
                Notes:{" "}
              </Typography>
              <Typography align="left" paragraph="true">
                {notes}
              </Typography>
            </div>
          )}

          <div className={classes.padding}>
            <Typography align="left" variant="h5">
              Tags:{" "}
            </Typography>
            <Chip label={courses} /> <Chip label={cuisines} />{" "}
            <Chip label={type} />
          </div>

          <div className={classes.padding}>
            <Typography variant="h5">Reviews </Typography>

            {loginsignup}
            <br />

            <CommentForm recipeId={recipeId} />
            {comments && <Comments comments={comments} />}
          </div>
        </Paper>
      </div>
    ) : (
      <div style={{ height: "100vh" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%" }}>
          <CircularProgress color="secondary"> </CircularProgress>
        </div>
      </div>
    );

    return (
      <div>
        <Helmet>
          <meta property="og:image" content={pictureUrl} />
          <meta name="twitter:image" content={pictureUrl}></meta>
        </Helmet>
        {recipesMarkup}
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

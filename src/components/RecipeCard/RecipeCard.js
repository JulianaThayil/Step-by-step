import React, { Component } from "react";
import classes from "./RecipeCard.module.css";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import MyButton from "../../util/MyButton";
import LikeButton from "../../util/LikeButton";
import DeleteRecipe from "../../util/DeleteRecipe";
import { Link,NavLink } from "react-router-dom";
import Truncate from "react-truncate";

//MUI stuff
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";

// Icon
import ChatIcon from "@material-ui/icons/Chat";

//Redux stuff
import { connect } from "react-redux";

class RecipeCard extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      recipe: {
        title,
        body,
        pictureUrl,
        createdAt,
        userImage,
        userHandle,
        recipeId,
        likeCount,
        commentCount,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteRecipe recipeId={recipeId} />
      ) : null;

    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" style={{ objectFit: "cover" }}>
              <img
                src={userImage}
                style={{ objectFit: "cover" }}
                width="100%"
                height="100%"
              />
            </Avatar>
          }
          title={title}
          subheader= {`by ${userHandle}`}
          component={NavLink}
          className={classes.head}
          activeClassName={classes.head}
          to={`/${userHandle}/${recipeId}`}
        />

        <CardMedia
          className={classes.media}
          component={Link}
          to={`/${userHandle}/${recipeId}`}
          image={pictureUrl}
          style={{ objectFit: "cover" }}
          width="100%"
          height="100%"
        />
        <CardContent>
          <Truncate lines={2}>{body}</Truncate>
        </CardContent>

        <CardActions disableSpacing>
          <LikeButton recipeId={recipeId} />
          <span>{likeCount} </span>

          <MyButton tip="comments">
            <ChatIcon color="secondary" />
          </MyButton>
          <span>{commentCount} </span>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <div style={{ marginRight: "1%" }}>{deleteButton}</div>
        </CardActions>
        <Typography
          className={classes.username}
          variant="body2"
          color="textSecondary"
        >
          posted {dayjs(createdAt).fromNow()}
        </Typography>
      </Card>
    );
  }
}
RecipeCard.propTypes = {
  user: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(RecipeCard);

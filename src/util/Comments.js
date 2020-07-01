import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  commentImage: {
    maxWidth: '100%',
    marginLeft:'10%',
    height: '8vh',
    paddingRight:'1vw',
    width:'8vh',
    objectFit: 'cover',
    borderRadius: '50%'
  },
  commentData: {
   width:'70vw'
 
  }
});

class Comments extends Component {
  render() {
    const { comments, classes } = this.props;
    return (
      <Grid container xs={12} direction="column">
        {comments.map((comment, index) => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt}  >
              <Grid item  style={{backgroundColor:'white'}}>
                <Grid container>
                  <Grid item>
                    <img
                      src={userImage}
                      alt="comment"
                      className={classes.commentImage}
                    />
                  </Grid>
                  <Grid xs={10} item>
                    <div className={classes.commentData}>
                      <Typography
                      color="secondary"
                        component={Link}
                        to={`/${userHandle}`}                       
                      >
                        {userHandle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                      </Typography>
                  
                      <Typography paragraph="true" variant="body1">{body}</Typography>
                    </div>
                    <hr /> 
                  </Grid>
                </Grid>
              </Grid>
              
              {index !== comments.length - 1 && (
                <hr  />
               
              )}
              
            </Fragment>
           
          );
        })}
      </Grid>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default withStyles(styles)(Comments);
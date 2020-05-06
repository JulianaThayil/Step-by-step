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
    width:'8vh',
    objectFit: 'cover',
    borderRadius: '50%'
  },
  commentData: {
    marginLeft: '15%',
  },

  commentbox:{

width:'60vw',
   marginLeft:'10px',
  },
});

class Comments extends Component {
  render() {
    const { comments, classes } = this.props;
    return (
      <Grid container    >
        {comments.map((comment, index) => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt} >
              <Grid item sm={10} style={{backgroundColor:'white'}} >
                <Grid container>
                  <Grid item sm={1}>
                    <img
                      src={userImage}
                      alt="comment"
                      className={classes.commentImage}
                    />
                  </Grid>
                  <Grid className={classes.commentbox} >
                    <div >
                      <Typography
                        variant="h5"
                        component={Link}
                        to={`/${userHandle}`}
                        color="primary"
                      >
                        {userHandle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                      </Typography>
                  
                      <Typography variabnt="body1">{body}</Typography>
                    </div>
                    <hr/> 
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
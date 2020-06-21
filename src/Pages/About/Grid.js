import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignSelf:'center',
    marginLeft:'10vw'
  },
 
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignContent="center" alignItems="center" spacing={3} >
        <Grid item xs>
        <img width="150px" height="150px" src="/assets/discover.svg" alt="vector"/>
        <Typography variant="h6"> Discover Recipes </Typography>
        </Grid>
     
        <Grid item xs>
        <img width="150px" height="150px" src="/assets/add_post.svg" alt="vector"/>
        <Typography variant="h6"> Post your own Recipes  </Typography>
        </Grid>

        <Grid item xs>
        <img width="150px" height="150px" src="/assets/social_sharing.svg" alt="vector"/>
        <Typography variant="h6"> Share Recipes </Typography>
        </Grid>
      </Grid>
      
    </div>
  );
}

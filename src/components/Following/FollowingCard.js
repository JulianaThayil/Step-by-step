import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles( theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));



export class FollowingCard extends Component {
  render() {
    const classes = useStyles();

    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia 
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Name
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Bio
              </Typography>
            </CardContent>
          </CardActionArea>
  
          <CardActions>
            <Button size="small" color="primary">
              View Profile
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default FollowingCard
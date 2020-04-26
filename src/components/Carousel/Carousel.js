import React, {Component} from 'react';
import classes from './Carousel.module.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';



class Carousel extends Component {


  

  render(){
    const tileData = [
      {
        imgPath:
        'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Homemade Pizza',
         author: 'Rhea',
         
     },
        {
          imgPath:'https://images.pexels.com/photos/2045362/pexels-photo-2045362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          title: 'Strawberry shake',
           author: 'Rohan',
       },
        {
          imgPath:
          'https://images.pexels.com/photos/213780/pexels-photo-213780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          title: 'Easy pancakes',
           author: 'Simran',
           
       },
      
      ];
   
  return (
  

    <div className={classes.carouselroot}>
 
       <div className={classes.carouselroot}>
      <GridList className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile className={classes.GridListTile}  style={{ height:'100%'}}>
            <img src={tile.imgPath} alt={tile.title} className={classes.image} />
            <GridListTileBar 
            className={classes.titlebar} 
            style={{ backgroundColor:'white'}}
              title={tile.title}
              subtitle={<span className={classes.subtitle}>@{tile.author}</span>}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
          
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <FavoriteBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>


 
    </div>
  
  );
}
}


export default Carousel




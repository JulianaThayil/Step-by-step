import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  gridList: {
    width: 900,
  },
}));


const tileData = [
  {
    imgPath:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Homemade Pizza",
    author: "Rhea",
  },
  {
    imgPath:
      "https://images.pexels.com/photos/2045362/pexels-photo-2045362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Strawberry shake",
    author: "Rohan",
  },
 
];

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile style={{height:'250px'}} key={tile.imgPath}>
            <img src={tile.imgPath} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
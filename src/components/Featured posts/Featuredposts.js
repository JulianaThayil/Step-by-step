import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  gridList: {
    width: 900,
  },
}));

const tileData = [
  {
    imgPath: "/blog/How-to-make-pav-at-home/main.jpg",
    title: "How to make pav at home",
    link:"/blog/how-to-make-pav-at-home",
  },
  {
    imgPath:
      "/blog/Tips-for-perfect-homemade-ice-cream/main.jpg",
    title: "Tips for perfect homemade ice cream",
    link:"/blog/tips-for-perfect-homemade-ice-cream"
  },
];

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile component={Link} to={tile.link} style={{ height: "260px" }} key={tile.imgPath}>
            <img src={tile.imgPath} alt={tile.title} />
            <GridListTileBar title={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

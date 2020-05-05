/* eslint-disable no-use-before-define */
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "57vw",
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={recipetags}
        getOptionLabel={(option) => option.title}
        defaultValue={[recipetags[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Add category tags"
            placeholder="Add a tag"
          />
        )}
      />
    </div>
  );
}

const recipetags = [
  { title: "Appetizers & Snacks" },
  { title: "Breakfast & Brunch" },
  { title: "BBQ & Grilling" },
  { title: "Cakes" },
  { title: "Desserts" },
  { title: "Dinner" },
  { title: "Drinks" },
  { title: "Healthy" },
  { title: "Low Calorie" },
  { title: "Low Fat" },
  { title: "Salads" },
  { title: "Slow Cooker" },
  { title: "Vegan" },
  { title: "Quick & Easy" },
];

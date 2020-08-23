import React from "react";
import classes from "./Blog.module.css";

//Mui
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Ice_cream() {
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h2">
        {" "}
        Tips for Perfect Homemade Ice-Cream
      </Typography>
      <Typography variant="body2"> August 23, 2020 by Juliana</Typography>
      <img
        className={classes.image}
        src="/blog/Tips-for-perfect-homemade-ice-cream/main.jpg"
      />
      <br />
      <br />
      <Typography variant="h5">
        {" "}
        Have you tried making ice cream at home but it didn't turn out as
        expected ? Does it turn out to be too soupy, or too icy. Well, not any
        more. While an ice cream making machine produces the best results, it is
        also possible to get the perfect ice cream without a machine. Below I
        have listed a few tips on how you can make the perfect creamy ice cream
        at home.
      </Typography>
      <br />
      <Box fontSize="h5.fontSize" letterSpacing={6} fontWeight={700}>
        Tips{" "}
      </Box>
      <br/>
      <Typography variant="h5">Tip #1: Cream: Never try making ice cream with just milk. Use a lot 
      of chilled heavy cream and condensed milk along with whole milk. </Typography><br />
      <Typography variant="h5">
        Tip #2: Add additional creamy ingredients. Such as egg yolks. 
      </Typography><br />
      <Typography variant="h5">Tip #3: Use powdered sugar. </Typography><br />
      <Typography variant="h5">
        Tip #4: Flavor: There are numerous flavoring options apart from just 
        vanilla and chocolate essence; such as Nutella and choco-chips or even real
        fruits like chikoo and mangoes.Additionaly you can also add dried fruits.
      </Typography><br />
      <br />
      XOXO
      <br /><br /><br />
    </div>
  );
}

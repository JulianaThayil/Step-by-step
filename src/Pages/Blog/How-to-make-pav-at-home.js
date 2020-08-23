import React from "react";
import classes from "./Blog.module.css";

//Mui
import Typography from "@material-ui/core/Typography";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function Pav() {
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h2"> How to make Pav (Bread) at Home</Typography>
      <Typography variant="body2"> August 22, 2020 by Juliana</Typography>

      <img className={classes.image} src="/blog/How-to-make-pav-at-home/main.jpg" />
      <br /><br />
      <Typography variant="h5">
        {" "}
        If you are scared that your bakery items like pav(bread) can be
        contaminated or you are away from home, and you miss the Goan pao, then
        you should definitely consider trying out this recipe. It is very simple
        to make and and tastes so much better than the shop-bought ones.
      </Typography>
      <br />
      <Typography variant="h5"> What is pav?</Typography>
      <Typography variant="h5">
        Pav is, (as you may have already guessed, thanks to the pictures) a type
        of Indian bread which is very popular in Goa. You can pair it with spicy
        goan style chicken xacuti or with a spicy egg omelette or chutneys.
      </Typography>
      <br/>
      <Typography variant="h5">
        Below is a step by step recipe with images of how to make soft pav at home. This recipe makes 12 pavs. Also you need to make sure you give it sufficient time to rest. 
      </Typography>
      <br/><br/>
      <Box fontSize="h6.fontSize" letterSpacing={6} fontWeight={500}>Ingredients </Box>
      <Grid container spacing={2}> 
      <Grid item xs={6}>
      <FormControlLabel control={<Checkbox name="checkedC" />} label="500 gm Plain flour" />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="1 cup Milk" />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="1 cup Water" />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="1 tsp Yeast" />
        </Grid>
        <Grid item xs={6}>
        <FormControlLabel control={<Checkbox name="checkedC" />} label="2 tsp Sugar" />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="1 tsp Salt" />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="2 tbsp Oil" />
        </Grid>
      </Grid>
     
      
      <br/>
      <Box fontSize="h6.fontSize" letterSpacing={6} fontWeight={500}>Instructions </Box>
      <Box fontSize="h6.fontSize"  fontWeight={500}>Step 1: </Box>
      <Typography variant="h5"> In a bowl measure 1 cup of warm water.</Typography>
      <img className={classes.img} src="/blog/How-to-make-pav-at-home/1.jpg"/>
      <br/>
      <Box  fontSize="h6.fontSize"  fontWeight={500}>Step 2: </Box>
      <Typography variant="h5"> Now add 2 tsp sugar to the warm water bowl. </Typography>
      <img className={classes.img} src="/blog/How-to-make-pav-at-home/2.jpg"/>
      <br/>
      <Box fontSize="h6.fontSize"  fontWeight={500}>Step 3: </Box>
      <Typography variant="h5"> To it, add 1 tsp yeast and 1 tsp salt</Typography>
      <img className={classes.img} src="/blog/How-to-make-pav-at-home/3.1.jpg"/>
      <img className={classes.img} src="/blog/How-to-make-pav-at-home/3.2.jpg"/>
      <br/>
      <Box fontSize="h6.fontSize"  fontWeight={500}>Step 4: </Box>
      <Typography variant="h5"> Now add 1 cup milk and 2 tbsp oil. Keep aside for 10 mins and let the yeast activate</Typography>
      <img className={classes.img} src="/blog/How-to-make-pav-at-home/4.jpg"/>
      <br/>
      <Box fontSize="h6.fontSize"  fontWeight={500}>Step 5: </Box>
      <Typography variant="h5"> After the yeast has activated, gradually add 500 gm plain flour </Typography>
      <img className={classes.img} src="/blog/How-to-make-pav-at-home/5.jpg"/>
      <br/>
      <Box fontSize="h6.fontSize"  fontWeight={500}>Step 6: </Box>
      <Typography variant="h5">Knead into a soft dough. Cover with a cloth and let it rest for 2 hours in a warm place.</Typography>
      <img className={classes.img} src="/blog/How-to-make-pav-at-home/6.jpg"/>
      <br/>

      <Box fontSize="h6.fontSize"  fontWeight={500}>Step 7: </Box>
      <Typography variant="h5">After 2 hours, punch the dough to remove the air incorporated. Then make balls of equal size and place them in a baking tray greased with oil</Typography>
      <img className={classes.img} src="/blog/How-to-make-pav-at-home/7.jpg"/>
      <br/>
      <Box fontSize="h6.fontSize"  fontWeight={500}>Step 8: </Box>
      <Typography variant="h5">Brush the balls with butter and let it rest for 20 mins. Meanwhile preheat the oven at 180 degree celcius. </Typography>
      <br/>
      <Box fontSize="h6.fontSize"  fontWeight={500}>Step 9: </Box>
      <Typography variant="h5">Bake at 180 degree celcius for 20 mins. After you take it out of the oven allow to cool completely to let it become soft</Typography>
      <img className={classes.image} src="/blog/How-to-make-pav-at-home/final.jpg"/>
      <br/><br/>
      XOXO
      <br/><br/>

    </div>
  );
}

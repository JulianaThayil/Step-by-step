import React from "react";
import Typography from "@material-ui/core/Typography";
import Cover from "../../components/Cover/Cover";

//Mui
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function Newsletter() {
  const post = {
    image: "/assets/postbox.jpg",
    text: "Newsletter",
  };
  const [email, setEmail] = React.useState("");
  return (
    <div>
      <Cover post={post}> </Cover>

      <div style={{ marginLeft: "15vw", marginRight: "15vw" }}>
        <Typography align="center">
          We deliver delicious recipes to your inbox
        </Typography>
        <br />
        <Typography align="center">
          Subscribe to our newsletter below
        </Typography>
        <br />
        <Grid justify="center" alignItems="center" container>
          <Grid item>
            <TextField
            type="email"
              id="outlined-basic"
              label="Email"
              fullWidth
              placeholder="xyx@example.com"
              variant="outlined"
            />
          </Grid>
          <Grid  item>
            <Button variant="contained" size="large"  color="secondary">
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

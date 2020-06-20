import React from "react";
import Typography from "@material-ui/core/Typography";
import Cover from "../../components/Cover/Cover";
import { Link } from "react-router-dom";

export default function About() {
  const post = {
    image: "/assets/about.jpg",
    text: "About us",
  };
  return (
    <div> 
      <Cover post={post}> </Cover>

      <div style={{marginLeft:'15vw',marginRight:'15vw'}}>
        <Typography align="center">
          {" "}
          StepChef is a food-focused social network created for home cooks and
          professionals to showcase their work through recipe sharing. Our goal
          is to ​connect cooks of all kinds and interests through recipes. We
          try to make both recipe sharing and understanding easy through our
          innovative step-by-step recipe format.{" "}
        </Typography>
        <br />
        <Typography align="center">
          Join us today and start chopping into the world of StepChef.
        </Typography>
        <br />
        <Typography align="center">Want to learn more about us?</Typography>
        <br />

        <p align="center">
          Get in touch with us <Link color="secondary" to="/contact"> here</Link> ​
        </p>
      </div>
    </div>
  );
}

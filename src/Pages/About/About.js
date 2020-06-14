import React from "react";
import Typography from "@material-ui/core/Typography";
import Cover from "../../components/Cover/Cover";
import {Link} from "react-router-dom";

export default function About() {
  const post = {
    image:
      ":​https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1. 2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 ",
    text: "About us",
  };
  return (
    <div>
      <Cover post={post}> </Cover>

      <Typography align="center">
        {" "}
        StepbyStep is a food-focused social network created for home cooks and
        professionals to showcase their work through recipe sharing. Our goal is
        to ​connect cooks of all kinds and interests through recipes. We try to
        make both recipe sharing and understanding easy through our innovative
        step-by-step recipe format.{" "}
      </Typography>
      <br />
      <Typography align="center">
        Join us today and start chopping into the world of STEP-BY-STEP.
      </Typography>
      <br />
      <Typography align="center">
      Want to learn more about us? 
      </Typography>
      <br />
      <Typography align="center">
      Get in touch with us ​
      </Typography><Link to="/contact"> here</Link>
    </div>
  );
}

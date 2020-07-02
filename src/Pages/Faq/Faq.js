import React from "react";
import Typography from "@material-ui/core/Typography";
import Accordion from "./Accordion";
import classes from "./Faq.module.css";

export default function Faq() {
  return (
    <div className={classes.container}>
      <Typography variant="h3">FAQs</Typography>
      <Typography >Feel free to contact us for queries not listed below. </Typography>
      <br/>
      <Accordion> </Accordion>
      <br/>
      <img style={{marginLeft:'10vw'}} width="60%" height="60%" src="/assets/faq.svg" alt="vector"/>

    </div>
  );
}

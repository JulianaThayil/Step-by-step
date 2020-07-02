import React from "react";
import Typography from "@material-ui/core/Typography";
import Cover from "../../components/Cover/Cover";
import classes from "./Newsletter.module.css";

export default function Newsletter() {
  const post = {
    image: "/assets/postbox.jpg",
    text: "Newsletter",
  };
  const [email, setEmail] = React.useState("");
  return (
    <div>
      <Cover post={post}> </Cover>

      <div className={classes.container}>
        <br />

        <iframe
          className={classes.form}
          src="https://cdn.forms-content.sg-form.com/39ac5b71-bba6-11ea-90bd-c2fc86413a71"
        />
      </div>
    </div>
  );
}

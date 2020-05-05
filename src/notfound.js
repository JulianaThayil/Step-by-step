import React, { Component } from "react";
import classes from "./notfound.modules.scss";
import Egg from "./components/Egg/Egg";
import { Link } from "react-router-dom";

//MUI
import Typography from "@material-ui/core/Typography";

export default class notfound extends Component {
  render() {
    return (
      <div class="backdrop">
        <center>
          <Egg> </Egg>
          <Typography variant="h6"> Page Not Found</Typography>
          <br />
          <div class="wrap">
            <Link to="/">
              <button class="red but">
                <i class="icon ion-md-lock"></i> Back to HomePage
              </button>
            </Link>
          </div>
        </center>
      </div>
    );
  }
}

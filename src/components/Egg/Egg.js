import React, { Component, Fragment } from "react";
import classes from "./Egg.modules.scss";

export default class Egg extends Component {
  render() {
    return (
      <Fragment>
        <div class="eggy">
          <h1> 4</h1>
          <div class="egg">
            <div class="white">
              <div class="yolk"></div>
            </div>
          </div>
          <h1> 4</h1>
        </div>
      </Fragment>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createMuiTheme } from "@material-ui/core/styles";
import { BackToTop, StyledProvider } from "components-extra";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#303036",
    },
  },
});

ReactDOM.render(
  <StyledProvider theme={theme}>
    <App />

    <BackToTop color="secondary" size="small" />
  </StyledProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();

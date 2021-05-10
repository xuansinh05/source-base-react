import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import store from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { muiTheme } from "./theme";
import "./assets/css/default.css";

ReactDOM.render(
  <React.Fragment>
    <MuiThemeProvider theme={muiTheme}>
      <Provider store={store({})}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);

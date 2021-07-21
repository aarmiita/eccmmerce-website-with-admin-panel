import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { create } from "jss";
import rtl from "jss-rtl";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { theme } from "./styles";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StylesProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

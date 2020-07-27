import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configuredStore } from "./store";
import App from "./App.js";

ReactDOM.render(
  <Provider store={configuredStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/index";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App title="Redux Basic Example" />
  </Provider>,
  document.getElementById("root")
);

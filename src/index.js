import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer/index";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App title="Redux Counter Example" />
  </Provider>,
  document.getElementById("root")
);

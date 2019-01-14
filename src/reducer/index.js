import React from "react";
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import listReducer from "./listReducer";

export default combineReducers({
  counterReducer,
  listReducer
});

import React from "react";
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import listReducer from "./listReducer";
import dataReducer from "./dataReducer";

export default combineReducers({
  counterReducer,
  listReducer,
  dataReducer
});

import React from "react";
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import listReducer from "./listReducer";
import dataReducer from "./dataReducer";
import tableReducer from "./tableReducer";

export default combineReducers({
  counterReducer,
  listReducer,
  dataReducer,
  tableReducer
});

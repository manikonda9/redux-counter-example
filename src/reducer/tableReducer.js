import { FETCH_DATA } from "../actions/types";
import React from "react";
import { dataRef } from "../config/firebase";

const intitialState = {
  data: []
};

const tableReducer = (state = intitialState, action) => {
  const data = state.data;
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return {
        ...state,
        data: data
      };
  }
};

export default tableReducer;

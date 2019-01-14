import React from "react";

const initialList = {
  list: []
};

const listReducer = (state = initialList, action) => {
  let list = state.list;
  switch (action.type) {
    case "ADD_LIST":
      list.push(action.text);
      break;
    case "DELETE":
      list.splice(action.id, 1);
      break;
    default:
      break;
  }
  return {
    ...state,
    list: list
  };
};

export default listReducer;

import React from "react";

const initialCount = {
  counter: 0
};

const reducer = (state = initialCount, action) => {
  let counter = state.counter;
  switch (action.type) {
    case "INC":
      counter = counter + action.value;
      break;
    case "DEC":
      counter = counter - action.value;
      break;
    case "ADD":
      counter = counter + action.value;
      break;
    case "SUB":
      counter = counter - action.value;
      break;
    default:
      counter = counter;
      break;
  }
  return {
    ...state,
    counter: counter
  };
};

export default reducer;

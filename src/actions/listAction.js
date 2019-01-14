import React from "react";

export const addItem = text => {
  return {
    type: "ADD_LIST",
    text: text
  };
};

export const deleteItem = id => {
  return {
    type: "DELETE",
    id: id
  };
};

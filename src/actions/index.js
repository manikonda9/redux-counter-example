import React from "react";

export const INC = "INC";
export const DEC = "DEC";
export const ADD = "ADD";
export const SUB = "SUB";

export const func = (type, value) => {
  return {
    type: type,
    value: value
  };
};

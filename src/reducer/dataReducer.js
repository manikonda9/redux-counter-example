import { FETCH_TODOS } from "../actions/types";

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;

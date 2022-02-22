import { coordinateDummy } from "./initalState";
import * as Constants from "../constants";

const reducer = (state = coordinateDummy, action) => {
  switch (action.type) {
    case Constants.ADD_COORDINATE:
      return {
        ...state,
      };
    case Constants.DELETE_COORDINATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;

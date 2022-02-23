import { coordinateDummy } from "./initalState";
import * as Constants from "../constants";

const reducer = (state = coordinateDummy, action) => {
  
  switch (action.type) {
    case Constants.ADD_COORDINATE:
      return {
        coordinate: [...state.coordinate, action.data]
      };
    case Constants.UPDATE_COORDINATE:
      const configIndex = state.coordinate.findIndex((data) => data.id === action.id);
      const target = state.coordinate.find((data) => data.id === action.id);
      target.text = action.text;
      state.coordinate.splice(configIndex, 1, target);
      return {
        ...state,
      }
    case Constants.DELETE_COORDINATE:
      const deleteIndex = state.coordinate.findIndex((data) => data.id === action.id);
      state.coordinate.splice(deleteIndex, 1);
      return {
        ...state,
      };
    case Constants.CONFIG_COOREINATE:
      const targetIndex = state.coordinate.findIndex((data) => data.id === action.data.id);
      state.coordinate.splice(targetIndex, 1, action.data);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;

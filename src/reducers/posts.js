import { postDummy } from "./initalState";
import * as Constants from "../constants";

const posts = (state = postDummy, action) => {
  switch (action.type) {
    case Constants.SET_POST:
      return action.payload;

    default:
      return state;
  }
};

export default posts;

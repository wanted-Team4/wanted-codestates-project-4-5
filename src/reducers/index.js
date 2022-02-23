import { combineReducers } from "redux";

import Coordinate from "./coordinate";
import posts from "./posts";

/**
 *
 * @param {prev state} state
 * @param {action} action
 */
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
  Coordinate,
  posts,
});

export default rootReducer;

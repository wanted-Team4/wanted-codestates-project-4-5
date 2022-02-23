import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["posts"],
};

export default persistReducer(persistConfig, rootReducer);

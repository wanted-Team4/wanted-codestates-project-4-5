import * as Constants from "../constants";

export const addCoordinateAction = (data) => {
  return {
    type: Constants.ADD_COORDINATE,
    data,
  };
};

export const updateCoordinateAction = (id, text) => {
  return {
    type: Constants.UPDATE_COORDINATE,
    id,
    text,
  };
};
export const deleteCoordinateAction = (id) => {
  return {
    type: Constants.DELETE_COORDINATE,
    id,
  };
};

export const configCoordinateAction = (data) => {
  return {
    type: Constants.CONFIG_COOREINATE,
    data,
  };
};

export const setPost = (post) => {
  return {
    type: Constants.SET_POST,
    payload: post,
  };
};

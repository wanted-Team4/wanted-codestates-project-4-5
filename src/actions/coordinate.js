import * as Constants from "../constants";
export const SET_POST = "SET_POST";

export const addCoordinateAction = (data) => {
  return {
    type: Constants.ADD_COORDINATE,
    data,
  };
};

export const updateCoordinateAction = (data) => {
  return {
    type: Constants.UPDATE_COORDINATE,
    data,
  };
};

export const deleteCoordinateAction = (data) => {
  return {
    type: Constants.DELETE_COORDINATE,
    data,
  };
};

export const setPost = (post) => {
  return {
    type: SET_POST,
    payload: post,
  };
};

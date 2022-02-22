import * as Constants from "../constants";

export const addCoordinateAction = (data) => {
  return {
    type: Constants.ADD_COORDINATE,
    data,
  };
};

export const deleteCoordinateAction = () => {
  return {
    type: Constants.DELETE_COORDINATE,
  };
};

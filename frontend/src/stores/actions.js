import { GET_LIST_START, GET_LIST_SUCCESS, GET_LIST_FAILED } from "./types";

export const getListStart = () => {
  return {
    type: GET_LIST_START,
  };
};

export const getListSuccess = (payload) => {
  return {
    type: GET_LIST_SUCCESS,
    payload,
  };
};

export const getListFailed = (err) => {
  return {
    type: GET_LIST_FAILED,
    err: err,
  };
};

export const getList = () => {
  return (dispatch) => {
    dispatch(getListStart());
    fetch("http://localhost:3000/api/todos/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          dispatch(getListSuccess(data));
        } else {
          console.log("an issue happenned...");
        }
      })
      .catch((err) => {
        dispatch(getListFailed(err));
      });
  };
};

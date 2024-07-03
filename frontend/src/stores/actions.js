import {
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_LIST_FAILED,
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,
} from "./types";

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


//ADD TODO ITEMM

export const addTodoStart = () => {
 return {
   type: ADD_TODO_START,
 };
};

export const addTodoSuccess = (payload) => {

 return {
   type: ADD_TODO_SUCCESS,
   payload,
 };
};

export const addTodoFailed = (err) => {
 return {
   type: ADD_TODO_FAILED,
   err: err,
 };
};

export const addTodo = (data) => {
 
 return (dispatch) => {
   dispatch(addTodoStart());
   fetch("http://localhost:3000/api/todos/", {
     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
     },


     body: JSON.stringify({ 
      title : data.title,
      description: data.description,
      status : data.status, 
     }),


   })
   .then((res) => {

    if (res.status === 201) {
         console.log('success 201 ');
         dispatch(addTodoSuccess());
         dispatch(getList())
       } else {
         console.log("an issue happenned...");
       }
     })
     .catch((err) => {
       dispatch(getListFailed(err));
     });
 };
};

import * as actionTypes from "./types";

const initialState = {
  loading: false,
  loadingAddTodo: false,
  todolist: [],
  viewTodo: {},
  error: false,
};

const ReducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionTypes.GET_LIST_SUCCESS:
      return {
        ...state,
        todolist: action.payload,
        loading: false,
        error: false,
      };

    case actionTypes.GET_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //CREATE A TODO

    case actionTypes.ADD_TODO_START:
      return {
        ...state,
        loadingAddTodo: true,
        error: false,
      };

    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        loadingAddTodo: false,
        error: false,
      };

    case actionTypes.ADD_TODO_FAILED:
      return {
        ...state,
        loadingAddTodo: false,
        error: action.payload,
      };


    //VIEW TODO

    case actionTypes.VIEW_TODO_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionTypes.VIEW_TODO_SUCCESS:
      return {
        ...state,
        viewTodo: action.payload,
        loading: false,
        error: false,
      };

    case actionTypes.VIEW_TODO_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


      //UPDATE TPDO


      case actionTypes.UPDATE_TODO_START:
       return {
         ...state,
         loading: true,
         error: false,
       };
 
     case actionTypes.UPDATE_TODO_SUCCESS:
       return {
         ...state,
         loading: false,
         error: false,
       };
 
     case actionTypes.UPDATE_TODO_FAILED
     :
       return {
         ...state,
         loading: false,
         error: action.payload,
       };

       

    default:
      return state;
  }
};

export default ReducerTodo;

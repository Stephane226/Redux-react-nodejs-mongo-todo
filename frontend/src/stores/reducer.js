import * as actionTypes from './types'

const initialState = {
    loading: false,
    todolist:  [ ],
    error: false,
   
}


console.log(initialState.stateupdated0bj)

const ReducerTodo = (state = initialState, action) => {
    switch (action.type) {

     case actionTypes.GET_LIST_START:
      return {
          ...state,
          loading: true,
          error: false
      }


       
       case actionTypes.GET_LIST_SUCCESS:
        return {
            ...state,
            todolist  : action.payload,
            loading: false,
            error: false
        }
  
   
        case actionTypes.GET_LIST_FAILED:
         return {
             ...state,
              loading: false,
             error: action.payload
         }
   

        default:
            return state
    }
}

export default ReducerTodo
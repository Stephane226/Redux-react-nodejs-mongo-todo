import * as actionTypes from './types'

const initialState = {
    loading: false,
    loadingAddTodo:false,
    todolist:  [ ],
    error: false,
   
}




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


         //CREATE A TODO

         case actionTypes.ADD_TODO_START:
          return {
              ...state,
              loadingAddTodo: true,
              error: false
          }
    
    
           
           case actionTypes.ADD_TODO_SUCCESS:
            return {
                ...state,
                loadingAddTodo: false,
                error: false
            }
      
       
            case actionTypes.ADD_TODO_FAILED:
             return {
                 ...state,
                 loadingAddTodo: false,
                 error: action.payload
             }
    

   

        default:
            return state
    }
}

export default ReducerTodo
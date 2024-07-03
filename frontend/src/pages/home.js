import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import TodoForm from '../components/TodoForm';

//redux
import { Link, Redirect } from "react-router-dom";
import {getList} from '../stores/actions'




const TodoList = () => {


 const dispatch = useDispatch()
 const todolist = useSelector(state => state.TodoReducer.todolist);
const loading  = useSelector(state => state.TodoReducer.loading)

  const handleDelete = (id) => {
   
  };


  useEffect( ()=>{
   dispatch(getList())
   console.log('dsd')
  }, [])


  useEffect(() => {
   //dispatch(creerListStatusCancel())
   console.log('dsd')
}, []);


console.log('dsd')
  return (
   <>
   <TodoForm/>
   {
    loading ? 'Loading...' :
    <List style={{marginTop : '50px'}}>
    {todolist && todolist.map((todo) => (
      <ListItem key={todo._id} style={{backgroundColor:'whitesmoke' , marginBottom : '10px',borderRadius : '10px'}}>
        <ListItemText primary={todo.title} secondary={todo.description} />
        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo._id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    ))}
  </List>
   }
  
    </>
  );
};

export default TodoList;

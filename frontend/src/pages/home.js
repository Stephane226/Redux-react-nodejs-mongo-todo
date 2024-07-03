import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import TodoForm from '../components/TodoForm';


//redux
import { Link, Redirect } from "react-router-dom";




const TodoList = () => {


 const dispatch = useDispatch()
 const todolist = useSelector(state => state.TodoReducer.todolist);


const todos   = []

  const handleDelete = (id) => {
   
  };

  return (
   <>
   <TodoForm/>
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
    </>
  );
};

export default TodoList;

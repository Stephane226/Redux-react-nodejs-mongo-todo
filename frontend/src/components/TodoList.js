import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {

const todos   = [
 {
  _id : '842989284',
  description : 'This is a description demo lorem.',
  status : 'pending'
 },
 {
  _id : '842989284',
  description : 'This is a description demo lorem.',
  status : 'pending'
 },
 {
  _id : '842989284',
  description : 'This is a description demo lorem.',
  status : 'pending'
 },
 {
  _id : '842989284',
  description : 'This is a description demo lorem.',
  status : 'pending'
 },
 {
  _id : '842989284',
  description : 'This is a description demo lorem.',
  status : 'pending'
 },
]

  const handleDelete = (id) => {
   
  };

  return (
    <List style={{marginTop : '50px'}}>
      {todos.map((todo) => (
        <ListItem key={todo._id} style={{backgroundColor:'whitesmoke' , marginBottom : '10px',borderRadius : '10px'}}>
          <ListItemText primary={todo.title} secondary={todo.description} />
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo._id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;

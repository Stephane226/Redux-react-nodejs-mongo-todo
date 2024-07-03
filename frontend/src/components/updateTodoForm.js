import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import {updateTodo } from '../stores/actions'
import { useHistory } from 'react-router-dom';

const UpdateTodoForm = (props) => {
 const history = useHistory();
 
  const [title, setTitle] = useState(props.viewTodo.title);
  const [description, setDescription] = useState(props.viewTodo.description);



  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({id : props.viewTodo._id, title, description, status: 'pending' }));
     //redirect to lists...

      history.push("/home");
 
    
  };




  return (
    <Box component="form" onSubmit={handleSubmit} >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Update Todo
      </Button>
    </Box>
  );
};

export default UpdateTodoForm;

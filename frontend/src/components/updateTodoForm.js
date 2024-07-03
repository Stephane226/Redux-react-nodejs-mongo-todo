import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import {addTodo } from '../stores/actions'

const UpdateTodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');



  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title, description, status: 'pending' }));
    setTitle('');
    setDescription('');
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

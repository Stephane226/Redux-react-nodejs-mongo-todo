import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Box component="form">
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
        Add Todo
      </Button>
    </Box>
  );
};

export default TodoForm;

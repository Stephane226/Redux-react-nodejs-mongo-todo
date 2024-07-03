import React from 'react';
import { Container, Typography } from '@mui/material';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Todo list 
      </Typography>
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default App;

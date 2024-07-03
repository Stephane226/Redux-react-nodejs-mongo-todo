import React from 'react';
import { Container, Typography } from '@mui/material';
import Home from './pages/home';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Todo list 
      </Typography>

 

      <Home />
    </Container>
  );
}

export default App;

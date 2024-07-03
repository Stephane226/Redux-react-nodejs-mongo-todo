// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');



// -----------------------------Create a new TODO item-----------------------------
router.post('/', async (req, res) => {
  console.log(req.body)
 try {
   const { title, description, status } = req.body;
   const newTodo = new Todo({
     title,
     description,
     status
   });
   await newTodo.save();
   res.status(201).json(newTodo);
 } catch (error) {
   console.error('Error creating TODO item:', error); // Log the error
   res.status(500).json({ error: 'Failed to create TODO item' });
 }
});




// -----------------------------Read (list) all TODO items-----------------------------
router.get('/', async (req, res) => {
 try {
  const todos = await Todo.find();
  res.status(200).json(todos);
} catch (error) {
  res.status(500).json({ error: 'Failed to fetch TODO items' });
}
});




// -----------------------------Read (detail) a specific TODO item-----------------------------
router.get('/:id', async (req, res) => {
 try {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ error: 'TODO item not found' });
  res.status(200).json(todo);
} catch (error) {
  res.status(500).json({ error: 'Failed to fetch TODO item' });
}
});



// -----------------------------Update an existing TODO item-----------------------------
router.put('/:id', async (req, res) => {
 try {
  const { title, description, status } = req.body;
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { title, description, status, updatedAt: Date.now() },
    { new: true }
  );
  if (!todo) return res.status(404).json({ error: 'TODO item not found' });
  res.status(200).json(todo);
} catch (error) {
  res.status(500).json({ error: 'Failed to update TODO item' });
}
});




// -----------------------------  Delete a TODO item start  --------------------------------
router.delete('/:id', async (req, res) => {
 try {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) return res.status(404).json({ error: 'TODO item not found' });
  res.status(200).json({ message: 'TODO item deleted' });
} catch (error) {
  res.status(500).json({ error: 'Failed to delete TODO item' });
}
});


module.exports = router;
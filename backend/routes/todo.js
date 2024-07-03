// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');



// -----------------------------Create a new TODO item-----------------------------
router.post('/', async (req, res) => {
// functionss here...
});




// -----------------------------Read (list) all TODO items-----------------------------
router.get('/', async (req, res) => {
 // functionss here...
});




// -----------------------------Read (detail) a specific TODO item-----------------------------
router.get('/:id', async (req, res) => {
  // functionss here...
});



// -----------------------------Update an existing TODO item-----------------------------
router.put('/:id', async (req, res) => {
 // functionss here...
});




// -----------------------------  Delete a TODO item start  --------------------------------
router.delete('/:id', async (req, res) => {
 // functionss here...
});


module.exports = router;
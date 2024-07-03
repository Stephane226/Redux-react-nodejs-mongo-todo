// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
 useUnifiedTopology: true
}).then(() => {
 console.log('Connected to Mongo database');
}).catch(err => {
 console.error('Could not connect to Mongo database.', err);
});




// App Routes
const todoRoutes = require('./routes/todo');
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
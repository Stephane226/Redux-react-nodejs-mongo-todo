// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


// Parser  JSON request bodies
app.use(bodyParser.json()); 

// MongoDB Connection
mongoose.connect('YOUR MONGO CONNECTION URL HERE', {
  useUnifiedTopology: true,
  useNewUrlParser: true, // Add this line to avoid deprecated warnings
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

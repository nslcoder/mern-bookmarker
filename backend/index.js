require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send({ message: 'This is a bookmarking web app.' });
});

// Start the server and listen
app.listen(port, () => {
  console.log(`The server is listening at port ${port}.`);
});

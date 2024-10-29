import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/authRouter.js';

dotenv.config ();

// Create app
const app = express ();

// Set up the middlewares
app.use (express.json ());
app.use (cors ());

// Connect wih database
const DB_URI = process.env.MONGO_URL;
mongoose
  .connect (DB_URI)
  .then (console.log ('Successful connection t DB 👍👍👍'))
  .catch (error => console.error ('Error connecting to DB ' + error.message));

//Health Check
app.get ('/', (req, res) => {
  return res.status (200).json ({message: 'Welcome to serviceSphere'});
});

//Routes
app.use ('/', authRouter);

// Listen to server
const PORT = process.env.PORT;
app.listen (PORT, () => {
  console.log (`App running on PORT http://localhost:${PORT}`);
});

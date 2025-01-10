import dotenv from 'dotenv';
dotenv.config ();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './routes/authRouter.js';
// import {
//   Client,
//   Environment,
//   OrdersCreateRequest,
//   OrdersCaptureRequest,
// } from '@paypal/checkout-server-sdk';
import subscribe from './routes/subscribeRoute.js';
import userRoute from './routes/userRouter.js';
import messageRoute from './routes/messageRouter.js';
import passwordRoute from './routes/passwordRouter.js';

// Create app
const app = express ();

// Set up middlewares
app.use (express.json ());
app.use (
  cors ({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true,
  })
);

// Connect with database
const DB_URI = process.env.MONGO_URL;
mongoose
  .connect (DB_URI)
  .then (() => console.log ('Successful connection to DB 👍👍👍'))
  .catch (error => console.error ('Error connecting to DB: ' + error.message));

// Health Check
app.get ('/', (req, res) => {
  return res.status (200).json ({message: 'Welcome to serviceSphere'});
});

// Routes
app.use ('/', authRouter);
app.use ('/', subscribe);
app.use ('/', userRoute);
app.use ('/', messageRoute);
app.use ('/', passwordRoute);

// PayPal client setup
// const environment = new Environment.Sandbox (
//   process.env.PAYPAL_CLIENT_ID,
//   process.env.PAYPAL_CLIENT_SECRET
// // );
// const client = new Client (environment);

// Create order route
// app.post ('/api/orders', async (req, res) => {
//   const {cost} = req.body;

//   const request = new OrdersCreateRequest ();
//   request.prefer ('return=representation');
//   request.requestBody ({
//     intent: 'CAPTURE',
//     purchase_units: [
//       {
//         amount: {
//           currency_code: 'USD',
//           value: cost,
//         },
//       },
//     ],
//   });

//   try {
//     const order = await client.execute (request);
//     res.status (201).json (order.result);
//   } catch (error) {
//     console.error ('Failed to create order:', error);
//     res.status (500).json ({error: 'Failed to create order.'});
//   }
// });

// // Capture order route
// app.post ('/api/orders/:orderID/capture', async (req, res) => {
//   const {orderID} = req.params;

//   const request = new OrdersCaptureRequest (orderID);
//   request.requestBody ({});

//   try {
//     const capture = await client.execute (request);
//     res.status (200).json (capture.result);
//   } catch (error) {
//     console.error ('Failed to capture order:', error);
//     res.status (500).json ({error: 'Failed to capture order.'});
//   }
// });

// Listen to server
const PORT = process.env.PORT || 4500;
app.listen (PORT, () => {
  console.log (`App running on http://localhost:${PORT}`);
});

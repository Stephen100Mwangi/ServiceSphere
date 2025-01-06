import express from 'express';
import createSubscriber from '../controllers/createSubscriber.js';

const subscribe = express.Router ();
subscribe.post ('/subscribe', createSubscriber);

export default subscribe;

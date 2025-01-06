import express from 'express';
import createMessage from '../controllers/Messages/createMessage.js';
import fetchMessages from '../controllers/Messages/fetchMessages.js';

const messageRoute = express.Router ();
messageRoute.post ('/messages/new', createMessage);
messageRoute.get ('/messages/:sender/:receiver', fetchMessages);

export default messageRoute;

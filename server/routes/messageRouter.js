import express from 'express';
import createMessage from '../controllers/Messages/createMessage.js';
import fetchMessages from '../controllers/Messages/fetchMessages.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const messageRoute = express.Router ();
messageRoute.post ('/messages/new', authMiddleware, createMessage);
messageRoute.get ('/messages/:sender/:receiver', authMiddleware, fetchMessages);

export default messageRoute;

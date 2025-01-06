import fetchUserById from '../controllers/fetchUserById.js';
import fetchUsers from '../controllers/fetchUsers.js';
import express from 'express';

const userRoute = express.Router ();
userRoute.get ('/users', fetchUsers);
userRoute.get ('/user/:id', fetchUserById);

export default userRoute;

import express from 'express';
import registerUser from '../controllers/registerUser.js';
import loginUser from '../controllers/loginUser.js';
import logoutUser from '../controllers/logoutUser.js';

const authRouter = express.Router ();

authRouter.post ('/register', registerUser);
authRouter.post ('/login', loginUser);
authRouter.get ('/logout', logoutUser);

export default authRouter;

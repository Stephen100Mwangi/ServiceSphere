import express from 'express';
import registerUser from '../controllers/registerUser.js';
import loginUser from '../controllers/loginUser.js';
const authRouter = express.Router ();

authRouter.post ('/auth/register', registerUser);
authRouter.post('/auth/login',loginUser)

export default authRouter;

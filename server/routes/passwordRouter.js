import express from 'express';
import resetPassword from '../controllers/resetPassword.js';
import forgotPassword from '../controllers/forgotPassword.js';

const passwordRoute = express.Router ();

passwordRoute.post ('/reset', resetPassword);
passwordRoute.post ('/forgot', forgotPassword);

export default passwordRoute;

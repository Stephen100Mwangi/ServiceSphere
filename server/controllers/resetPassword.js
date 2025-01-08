import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
const resetPassword = async (req, res, next) => {
    if(!req.body.password || !req.body.token) {
        return res.status(400).json({message: 'All fields are required'});
    }
};

export default resetPassword;

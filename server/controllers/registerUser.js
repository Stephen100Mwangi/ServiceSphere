import User from '../models/User.js';
import {validationResult, body} from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Allows letters, numbers, underscores, and hyphens, 3-30 characters
const USERNAME = /^[a-zA-Z0-9_-]{3,30}$/;

// Standard email pattern
const EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const registerUser = async (req, res) => {
  const {username, email, password, confirmPassword} = req.body;
  if (!username || !email || !password || !confirmPassword) {
    return res.status (400).json ({
      success: false,
      message: 'All fields are required',
    });
  }

  if (!PASSWORD.test (password)) {
    return res.status (400).json ({
      message: 'Password must contain a minimum of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    });
  }

  if (!EMAIL.test (email)) {
    return res
      .status (400)
      .json ({message: 'Please provide a valid email address'});
  }

  // if (!USERNAME.test (username)) {
  //   return res.status (400).json ({message: 'Please provide a valid username'});
  // }

  try {
    // Check for existing user by email or username
    const existingUser = await User.findOne ({
      email: email.toLowerCase (),
    });

    if (existingUser) {
      return res.status (400).json ({
        success: false,
        message: 'User with this email or username already exists',
      });
    }

    const hashPassword = await bcrypt.hash (password, 10);
    const newUser = new User ({
      username,
      email: email.toLowerCase (),
      password: hashPassword,
    });

    await newUser.save ();

    const savedUser = {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    };

    const SECRET = process.env.ACCESS_TOKEN;
    if (!SECRET) {
      throw new Error ('ACCESS_TOKEN is not defined in environment variables');
    }

    const token = jwt.sign ({user: savedUser}, SECRET, {expiresIn: '100d'});

    return res.status (201).json ({
      success: true,
      message: 'User created successfully',
      user: savedUser,
      token,
    });
  } catch (error) {
    
    console.error ('Registration error:', error);
    return res.status (500).json ({
      success: false,
      message: error.message || 'Error during registration',
    });
  }
};

export default registerUser;

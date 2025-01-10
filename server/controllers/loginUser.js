import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    // Check for missing fields
    if (!email || !password) {
      return res.status (400).json ({message: 'All fields are required'});
    }

    // Find user by email
    const userExists = await User.findOne ({email});
    if (!userExists) {
      return res.status (401).json ({message: 'Invalid login credentials'});
    }

    // Compare provided password with hashed password in DB
    const passwordCorrect = await bcrypt.compare (
      password,
      userExists.password
    );
    if (!passwordCorrect) {
      return res.status (401).json ({message: 'Invalid login credentials'});
    }

    // User data to include in the token
    const savedUser = {
      id: userExists._id,
      username: userExists.username,
      email: userExists.email,
    };

    // Ensure secret exists
    const SECRET = process.env.ACCESS_TOKEN;
    if (!SECRET) {
      throw new Error ('ACCESS_TOKEN is not defined in environment variables');
    }

    // Sign the token
    const token = jwt.sign ({user: savedUser}, SECRET, {expiresIn: '100d'});

    // Return success response
    return res.status (200).json ({
      success: true,
      user: savedUser,
      message: 'User login successful',
      token,
    });
  } catch (error) {
    console.error ('Login error:', error);
    return res.status (500).json ({message: 'Internal server error'});
  }
};

export default loginUser;

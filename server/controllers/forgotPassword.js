import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport ({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});


const forgotPassword = async (req, res) => {
  try {
    const email = req.body;
    if (!email) {
      return res.status (400).json ({message: 'Email field is required'});
    }

    // Check that user exists in the database
    const userExists = await User.findOne ({email});
    if (!userExists) {
      return res.status (404).json ({message: 'User not found'});
    }

    // Generate a reset token
    const resetToken = jwt.sign (
      {userId: userExists.id},
      process.env.RESET_TOKEN_SECRET,
      {expiresIn: '15m'}
    );

    // Create a reset password link
    const resetUrl = `${process.env.FRONTEND_URL}/resetPassword?token=${resetToken}`;

    // Send the user an email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <p>Hello ${userExists.username},</p>
        <p>You have requested to reset your password.</p>
        <p>Please click the link below to reset your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>This link will expire in 15 minutes.</p>
        <p>If you didn't request this, please ignore this email.</p>
        <p>Thank you for using our service.</p>
        <br>
        <p>Best regards,</p>
        <p>The ServiceSphere Team</p>
      `,
    };

    await transporter.sendMail (mailOptions);
    res.status (200).json ({message: 'Email sent successfully'});
  } catch (error) {
    console.error ('Forgot password error:', error);
    res.status (500).json ({
      message: 'Error processing password reset request',
    });
  }
};

export default forgotPassword;

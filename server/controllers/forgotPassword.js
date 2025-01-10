import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport ({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify SMTP connection
transporter.verify ((error, success) => {
  if (error) {
    console.error ('SMTP Connection Error:', error);
  } else {
    console.log ('SMTP Server Ready:', success);
  }
});

const forgotPassword = async (req, res) => {
  try {
    const {email} = req.body;

    if (!email) {
      return res.status (400).json ({message: 'Email field is required.'});
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test (email)) {
      return res.status (400).json ({message: 'Invalid email format.'});
    }

    // Check if the user exists in the database
    const userExists = await User.findOne ({email});
    if (!userExists) {
      return res.status (404).json ({message: 'User not found.'});
    }

    // Generate a reset token
    const resetToken = jwt.sign (
      {userId: userExists.id},
      process.env.JWT_RESET_SECRET,
      {expiresIn: '15m'}
    );

    userExists.resetPasswordToken = resetToken;
    userExists.resetPasswordExpires = Date.now () + 15 * 60 * 1000; // 15 minutes
    await userExists.save ();

    // Create a reset password link
    const resetUrl = `${process.env.FRONTEND_URL}/reset?token=${resetToken}`;

    // Send the user an email
    const mailOptions = {
      from: `"ServiceSphere Team" <${process.env.EMAIL_USERNAME}>`, // Professional sender name
      to: email,
      subject: 'Password Reset Request',
      html: `
        <p>Hello ${userExists.username},</p>
        <p>You have requested to reset your password.</p>
        <p>Please click the link below to reset your password:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>This link will expire in 15 minutes.</p>
        <p>If you didn't request this, please ignore this email or contact support.</p>
        <br>
        <p>Best regards,</p>
        <p>The ServiceSphere Team</p>
      `,
      replyTo: process.env.EMAIL_USERNAME, // Reply-to address
      headers: {
        'X-Entity-Ref-ID': `${userExists.id}`, // Custom header for tracking
      },
    };

    await transporter.sendMail (mailOptions);
    res.status (200).json ({
      message: 'Email sent successfully. Navigate to your email to reset your password.',
    });
  } catch (error) {
    console.error ('Forgot password error:', error);
    res.status (500).json ({
      message: 'An error occurred while processing your password reset request.',
    });
  }
};

export default forgotPassword;

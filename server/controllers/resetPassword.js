import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const resetPassword = async (req, res) => {
  const {password} = req.body;
  const {token} = req.params;

  // Early validation to fail fast
  if (!token || !password) {
    res.status (400).json ({message: 'All fields are required'});
    return;
  }

  if (!PASSWORD_REGEX.test (password)) {
    res.status (400).json ({
      message: 'Invalid password format',
    });
    return;
  }

  try {
    // Verify token first before database operation
    const decoded = jwt.verify (token, process.env.JWT_RESET_SECRET);

    // Use lean() for faster query when we just need to read
    const user = await User.findOne ({
      _id: decoded.userId,
      resetPasswordToken: token,
      resetPasswordExpires: {$gt: Date.now ()},
    })
      .select ('_id password resetPasswordToken resetPasswordExpires')
      .lean ();

    if (!user) {
      res.status (400).json ({message: 'Invalid or expired reset token'});
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash (password, 10);

    // Use updateOne instead of save() for better performance
    await User.updateOne (
      {_id: user._id},
      {
        $set: {password: hashedPassword},
        $unset: {resetPasswordToken: 1, resetPasswordExpires: 1},
      }
    );

    res.status (200).json ({message: 'Password reset successful'});
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      res.status (400).json ({message: 'Invalid reset token'});
      return;
    }
    console.error ('Reset password error:', error);
    res.status (500).json ({message: 'Error resetting password'});
  }
};

export default resetPassword;

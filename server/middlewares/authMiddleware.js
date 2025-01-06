import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  // Get Token from authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith ('Bearer ')) {
    return res.status (401).json ({message: 'No token provided'});
  }

  // Extract the token from Bearer prefix
  const token = authHeader.split (' ')[1];

  try {
    const decoded = jwt.verify (token, process.env.ACCESS_TOKEN);

    // Attach user information to request object
    req.user = decoded.user;

    // Proceed to the next authMiddleware
    next ();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status (401).json ({message: 'Token expired'});
    }

    return res.status (403).json ({message: 'Invalid token'});
  }
};

export default authMiddleware;

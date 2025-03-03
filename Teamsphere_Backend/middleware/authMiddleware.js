const jwt = require('jsonwebtoken');

// Middleware to protect routes
const protect = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    // Remove 'Bearer ' prefix if present
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET || 'your_jwt_secret_key');
    req.user = decoded; // Attach the decoded payload (user info) to the request object
    next(); // Allow the request to continue
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

module.exports = protect;

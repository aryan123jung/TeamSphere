// const express = require('express');
// const router = express.Router();
// const { register, login } = require('../controllers/userController');

// router.post('/login',userController.loginUser)
// router.post('/register',userController.registerUser)

// module.exports = router;

// const express = require('express');
// const { registerUser, loginUser } = require('../controllers/userController');
// const rateLimiterMiddleware = require('../middleware/rateLimiter');
// const authenticateToken = require('../middleware/authMiddleware');


// const router = express.Router();

// // Public routes
// router.post('/register', rateLimiterMiddleware, registerUser);
// router.post('/login', rateLimiterMiddleware, loginUser);


// // Protected route
// router.post('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'This is a protected POST route', user: req.user });
//   });


// module.exports = router;
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const rateLimiterMiddleware = require('../middleware/rateLimiter');

const router = express.Router();

// Public routes
router.post('/register', rateLimiterMiddleware, registerUser); // Correct route: /api/user/register
router.post('/login', rateLimiterMiddleware, loginUser); // Correct route: /api/user/login

module.exports = router;
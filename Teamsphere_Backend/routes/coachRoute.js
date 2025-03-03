const express = require('express');
const { registerCoach, loginCoach } = require('../controllers/coachController');

const router = express.Router();

// Coach Registration Route
router.post('/register', registerCoach);

// Coach Login Route
router.post('/login', loginCoach);

module.exports = router;

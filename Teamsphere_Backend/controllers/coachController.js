const Coach = require('../model/Coach'); // Import Coach model
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerCoach = async (req, res) => {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
        return res.status(400).json({
            error: "Please provide name, email, and password"
        });
    }

    try {
        // Check if the coach already exists
        const existingCoach = await Coach.findOne({ where: { email } });
        if (existingCoach) {
            return res.status(400).json({
                error: "Coach already registered"
            });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new coach
        await Coach.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: "Registration successful!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

const loginCoach = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({
            error: "Please provide email and password"
        });
    }

    try {
        // Find coach by email
        const coach = await Coach.findOne({ where: { email } });
        if (!coach) {
            return res.status(400).json({
                error: "Invalid credentials"
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, coach.password);
        if (!isMatch) {
            return res.status(400).json({
                error: "Invalid credentials"
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: coach.coach_id, email: coach.email },
            process.env.JWT_SECRET || 'your_secret_key',
            { expiresIn: '24h' }
        );

        res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports = { registerCoach, loginCoach };

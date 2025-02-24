

// const User = require('../model/User'); // Ensure proper import
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// // Register User
// const registerUser = async (req, res) => {
//   const { username, password } = req.body;

//   // Validate username and password
//   if (!username || !password) {
//       return res.status(400).json({
//           error: "Please insert username and password",
//       });
//   }

//   try {
//       // Check if the user already exists
//       const user = await User.findOne({ where: { username } });
//       if (user) {
//           return res.status(400).json({
//               error: "User already exists",
//           });
//       }

//       // Hash the password
//       const saltRound = 10;
//       const hashpassword = await bcrypt.hash(password, saltRound);

//       // Create a new user
//       const newUser = await User.create({ username, password: hashpassword });
//       res.status(200).json({ message: "Registration Successful" });
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Something went wrong" });
//   }
// };

// // Login User
// const loginUser = async (req, res) => {
//   const { username, password } = req.body;

//   // Validate username and password
//   if (!username || !password) {
//       return res.status(400).json({
//           error: "Please insert username and password",
//       });
//   }

//   try {
//       // Find user by username
//       const user = await User.findOne({ where: { username } });
//       if (!user) {
//           return res.status(400).json({
//               error: "User not found",
//           });
//       }

//       // Compare passwords
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//           return res.status(400).json({
//               error: "Incorrect password",
//           });
//       }

//       // Generate JWT token
//       const token = jwt.sign(
//           { id: user.id, username: user.username },
//           process.env.JWT_SECRET || 'FVHJAFJHSFVBSFBSSFJSF',
//           { expiresIn: '24h' }
//       );

//       res.status(200).json({ message: "Successfully logged in", token });
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Something went wrong" });
//   }
// };

// module.exports = { registerUser, loginUser };
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// const registerUser = async (req, res) => {
//     const { name, email, password } = req.body;
  
//     // Validate input
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'Please provide name, email, and password' });
//     }
  
//     try {
//       // Check if email already exists
//       const existingUser = await User.findOne({ where: { email } });
//       if (existingUser) {
//         return res.status(400).json({ message: 'Email already exists' });
//       }
  
//       // Hash the password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
  
//       // Create new user
//       const newUser = await User.create({ name, email, password: hashedPassword });
  
//       // Return success message and user data (without token)
//       res.status(201).json({ message: 'User registered successfully', user: newUser });
//     } catch (error) {
//       console.error('Error during registration:', error);
//       res.status(500).json({ message: 'Server error', error: error.message });
//     }
//   };

// //   const loginUser = async (req, res) => {
// //     const { email, password } = req.body;
  
// //     // Validate input
// //     if (!email || !password) {
// //       return res.status(400).json({ message: 'Please provide email and password' });
// //     }
  
// //     try {
// //       // Find user by email
// //       const user = await User.findOne({ where: { email } });
// //       if (!user) {
// //         return res.status(400).json({ message: 'Invalid credentials' });
// //       }
  
// //       // Compare passwords
// //       const isMatch = await bcrypt.compare(password, user.password);
// //       if (!isMatch) {
// //         return res.status(400).json({ message: 'Invalid credentials' });
// //       }
  
// //       // Generate JWT token
// //       const token = jwt.sign(
// //         { id: user.id, email: user.email },
// //         process.env.JWT_SECRET || 'fallback_secret_key',
// //         { expiresIn: '1h' }
// //       );
  
// //       res.status(200).json({ message: 'Login successful', token });
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       res.status(500).json({ message: 'Server error', error: error.message });
// //     }
// //   };
// exports.loginUser = async (req, res) => {
//     console.log("Received login request:", req.body); // Debugging
    
//     const { email, password } = req.body;
    
//     if (!email || !password) {
//       console.log("Missing email or password");
//       return res.status(400).json({ error: "Email and password are required" });
//     }
  
//     try {
//       const user = await findUserByEmail(email);
  
//       if (!user) {
//         console.log("User not found:", email);
//         return res.status(400).json({ error: "Invalid credentials" });
//       }
  
//       const validPassword = await bcrypt.compare(password, user.password);
//       if (!validPassword) {
//         console.log("Invalid password for:", email);
//         return res.status(400).json({ error: "Invalid credentials" });
//       }
  
//       // Generate JWT Token
//       const token = jwt.sign(
//         { user_id: user.user_id, role: user.role },
//         process.env.JWT_SECRET || "fallback_secret",
//         { expiresIn: "24h" }
//       );
  
//       console.log("Login successful:", email);
//       res.json({ token, role: user.role, user_id: user.user_id , name: user.name});
  
//     } catch (err) {
//       console.error("Login error:", err.message);
//       res.status(500).json({ error: err.message });
//     }
//   };
  

// module.exports = { registerUser, loginUser };


// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// // Register User
// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   // Validate input
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'Please provide name, email, and password' });
//   }

//   try {
//     // Check if email already exists
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const newUser = await User.create({ name, email, password: hashedPassword });

//     // Return success message and user data (without token)
//     res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// // Login User
// const loginUser = async (req, res) => {
//   console.log("Received login request:", req.body); // Debugging

//   const { email, password } = req.body;

//   // Validate input
//   if (!email || !password) {
//     console.log("Missing email or password");
//     return res.status(400).json({ error: "Email and password are required" });
//   }

//   try {
//     // Find user by email
//     const user = await User.findOne({ where: { email } });

//     if (!user) {
//       console.log("User not found:", email);
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // Compare passwords
//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) {
//       console.log("Invalid password for:", email);
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // Generate JWT Token
//     const token = jwt.sign(
//       { user_id: user.user_id, role: user.role },
//       process.env.JWT_SECRET || "fallback_secret",
//       { expiresIn: "24h" }
//     );

//     console.log("Login successful:", email);
//     res.json({ token, role: user.role, user_id: user.user_id, name: user.name });
//   } catch (err) {
//     console.error("Login error:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// };

// // Export functions
// module.exports = { registerUser, loginUser };

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create new user
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { registerUser, loginUser };
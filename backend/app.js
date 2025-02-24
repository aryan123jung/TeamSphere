// //initialization 
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const sequelize = require('./config/db')
// const testRoutes = require('./routes/userRoute')

// //creating a server
// const app = express();

// const PORT =  4000;

// //Creating a middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res)=>{
//     res.send("WELCOME TO THE PAGE")
// })

// app.get('/notice', (req,res)=>{
//     res.send("This is notice")
// })

// app.use('/test', testRoutes);

// //Running aon PORT
// app.listen(PORT, () => {
//     console.log(`server Running on......................PORT : ${PORT}`)
// })



// const express = require('express');
// const userRoutes = require('./routes/userRoutes');
// const authenticateToken = require('./middleware/authMiddleware');

// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/user', userRoutes);

// // Protected route example
// app.post('/api/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'This is a protected POST route', user: req.user });
//   });

// module.exports = app;



const express = require('express');
const cors = require('cors'); // Import the cors package
const userRoutes = require('./routes/userRoutes');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your React app's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);

// Protected route example
app.post('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected POST route', user: req.user });
});

module.exports = app;
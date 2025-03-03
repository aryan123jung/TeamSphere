// //Initialization
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const sequelize = require('./database/db');
// const coachRoute = require('./routes/coachRoute')
// const playerRoute = require('./routes/playerRoute')
// const playerStatusRoute = require('./routes/playerStatusRoutes')
// const path = require('path');



// //Importing Models
// const Player = require('./model/Player'); // Import the Player model
// const Coach = require('./model/Coach'); // Import the Coach model
// const PlayerStatus = require('./model/PlayerStatus'); // Import the PlayerStatus model

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// //Creating a Server
// const app = express();

// //Creating a port
// const PORT = process.env.PORT || 5000

// //Creating a middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


// app.get('/login',(req, res)=>{
//     res.send("Welcome to the web page")
// })


// app.use('/coach', coachRoute)
// app.use('/players', playerRoute);
// app.use('/playerStatus', playerStatusRoute);
// // app.use('/products', productRoute);

// const syncModels = async () => {
//     try {
//         // Sync models (force: true will drop and recreate the table, alter: true will modify the table structure if needed)
//         await sequelize.sync({ force: false }); // Use force: true only during development (it drops the tables)
//         console.log("Models are synchronized with the database.");
//     } catch (error) {
//         console.error("Error synchronizing models:", error);
//     }
// };
// // Sync models before starting the server
// syncModels();

// //Running on PORT
// app.listen(PORT, ()=>{
//     console.log(`Server Running on........................ PORT ${PORT}`)
// })



const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Import path module
const sequelize = require('./database/db');
const coachRoute = require('./routes/coachRoute');
const playerRoute = require('./routes/playerRoute');
const playerStatusRoute = require('./routes/playerStatusRoutes');

// Importing Models
const Player = require('./model/Player'); // Import the Player model
const Coach = require('./model/Coach'); // Import the Coach model
const PlayerStatus = require('./model/PlayerStatus'); // Import the PlayerStatus model

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get('/login', (req, res) => {
    res.send("Welcome to the web page");
});

app.use('/coach', coachRoute);
app.use('/players', playerRoute);
app.use('/playerStatus', playerStatusRoute);

// Sync models with the database
const syncModels = async () => {
    try {
        await sequelize.sync({ force: false }); // Use force: true only during development
        console.log("Models are synchronized with the database.");
    } catch (error) {
        console.error("Error synchronizing models:", error);
    }
};

// Sync models before starting the server
syncModels();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
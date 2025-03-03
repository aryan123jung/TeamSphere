const Player = require('../model/Player'); // Import Player model
const upload = require('../middleware/imageUpload'); // Import Multer upload middleware


const createPlayer = async (req, res) => {
    try {
        console.log("Received request to create player:", req.body);
        console.log("Uploaded file:", req.file);

        const { name, age, nationality, category } = req.body;
        // const profile_picture = req.file ? req.file.path : null;
        const profile_picture = req.file ? `/uploads/${req.file.filename}` : null;

        if (!name || !age || !nationality || !category) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newPlayer = await Player.create({
            name,
            age,
            nationality,
            category,
            profile_picture
        });

        res.status(201).json({ message: "Player created successfully", player: newPlayer });
    } catch (error) {
        console.error("Error creating player:", error);  // Improved logging
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
};
// const createPlayer = async (req, res) => {
//     try {
//         console.log("Received request to create player:", req.body);
//         console.log("Uploaded file:", req.file);

//         if (req.file && req.file.size > 5 * 1024 * 1024) {
//             return res.status(400).json({ error: 'File size exceeds the limit of 5MB' });
//         }

//         const { name, age, nationality, category } = req.body;
//         const profile_picture = req.file ? req.file.path : null;

//         if (!name || !age || !nationality || !category) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         const newPlayer = await Player.create({
//             name,
//             age,
//             nationality,
//             category,
//             profile_picture
//         });

//         res.status(201).json({ message: "Player created successfully", player: newPlayer });
//     } catch (error) {
//         console.error("Error creating player:", error);  // Improved logging
//         res.status(500).json({ error: error.message || "Something went wrong" });
//     }
// };

// Get all players
const getPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.status(200).json(players);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch players" });
    }
};

// Get a single player by ID
const getPlayerById = async (req, res) => {
    const { playerId } = req.params;

    try {
        const player = await Player.findByPk(playerId);
        if (!player) {
            return res.status(404).json({ error: "Player not found" });
        }
        res.status(200).json(player);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch player" });
    }
};

// Update a player's details
const updatePlayer = async (req, res) => {
    const { playerId } = req.params;
    const { name, age, nationality, category } = req.body;
    const profile_picture = req.file ? req.file.path : null; // Get the updated profile picture path

    try {
        const player = await Player.findByPk(playerId);
        if (!player) {
            return res.status(404).json({ error: "Player not found" });
        }

        await player.update({
            name,
            age,
            nationality,
            category,
            profile_picture  // Update the profile picture path if a new one is uploaded
        });

        res.status(200).json({ message: "Player updated successfully", player });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update player" });
    }
};



const deletePlayer = async (req, res) => {
    const { playerId } = req.params; // Extract playerId from the route parameters
  
    try {
      const player = await Player.destroy({
        where: { player_id: playerId }, // Match playerId from the URL
      });
  
      if (player) {
        return res.status(200).json({ message: "Player deleted successfully" });
      } else {
        return res.status(404).json({ error: "Player not found" });
      }
    } catch (error) {
      console.error("Error deleting player:", error);
      return res.status(500).json({ error: "Failed to delete player" });
    }
  };
  


module.exports = { createPlayer, getPlayers, getPlayerById, updatePlayer, deletePlayer };

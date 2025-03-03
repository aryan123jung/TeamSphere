// const express = require("express");
// const pool = require("../config/db"); // Your PostgreSQL connection
// const router = express.Router();

// // ✅ GET all players
// router.get("/", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM players");
//     res.json(result.rows); // Send back the list of players
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ POST - Add a new player
// router.post("/", async (req, res) => {
//   try {
//     const { name, id, age, nationality, category, batting, bowling, fielding, fitness, matchAwareness, photo } = req.body;

//     // Insert player data into the 'players' table
//     const result = await pool.query(
//       "INSERT INTO players (name, id, age, nationality, category, batting, bowling, fielding, fitness, match_awareness, photo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
//       [name, id, age, nationality, category, batting, bowling, fielding, fitness, matchAwareness, photo]
//     );

//     // Send the added player back as response
//     res.status(201).json(result.rows[0]); // Return the newly added player
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "Failed to add player" });
//   }
// });

// // ✅ PUT - Update a player by ID
// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, age, nationality, category, batting, bowling, fielding, fitness, matchAwareness, photo } = req.body;

//     const result = await pool.query(
//       "UPDATE players SET name = $1, age = $2, nationality = $3, category = $4, batting = $5, bowling = $6, fielding = $7, fitness = $8, match_awareness = $9, photo = $10 WHERE id = $11 RETURNING *",
//       [name, age, nationality, category, batting, bowling, fielding, fitness, matchAwareness, photo, id]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: "Player not found" });
//     }

//     res.json(result.rows[0]); // Return updated player details
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "Failed to update player" });
//   }
// });

// // ✅ DELETE - Remove a player by ID
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await pool.query("DELETE FROM players WHERE id = $1 RETURNING *", [id]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: "Player not found" });
//     }

//     res.json({ message: "Player deleted successfully", player: result.rows[0] });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: "Failed to delete player" });
//   }
// });

// module.exports = router;
const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const { addPlayer, getPlayers } = require('../controllers/playerController');

const router = express.Router();
router.post('/add', upload.single('photo'), addPlayer);
router.get('/', getPlayers);

module.exports = router;
// const express = require('express');
// const {
//     createPlayerStats,
//     getPlayerStatsByPlayerId,
//     getAllPlayerStats,
//     updatePlayerStats,
//     deletePlayerStats
// } = require('../controllers/playerStatusController');

// const router = express.Router();




// // Register the route for creating player stats
// router.post('/playerStatus/create', createPlayerStats);

// // Other routes
// router.get('/playerStatus/:playerId', getPlayerStatsByPlayerId);
// router.get('/playerStatus', getAllPlayerStats);
// router.put('/playerStatus/:stat_id', updatePlayerStats);
// router.delete('/playerStatus/:stat_id', deletePlayerStats);

// module.exports = router;



const express = require('express');
const router = express.Router();
const { createPlayerStats, getPlayerStatsByPlayerId, getAllPlayerStats, updatePlayerStats, deletePlayerStats } = require('../controllers/playerStatusController');

// Create Player Stats
router.post('/create', createPlayerStats);

// Other routes...
router.get('/:playerId', getPlayerStatsByPlayerId);
router.get('/', getAllPlayerStats);
router.put('/:stat_id', updatePlayerStats);
router.delete('/:stat_id', deletePlayerStats);

module.exports = router;






// const router = express.Router();

// // Create player stats
// router.post('/playerStatus/create', createPlayerStats);

// // Get all stats for a specific player
// router.get('/playerStats/:playerId', getPlayerStatsByPlayerId);

// // Get stats for all players
// router.get('/playerStats', getAllPlayerStats);

// // Update player stats
// router.put('/playerStats/:stat_id', updatePlayerStats);

// // Delete player stats
// router.delete('/playerStats/:stat_id', deletePlayerStats);

// module.exports = router;

// const { default: Addplayer } = require('../../frontend/src/components/AddPlayer/Addplayer');
const Player = require('../models/Player');

const addPlayer = async (req, res) => {
  try {
    const { name, age, nationality, category, batting, bowling, fielding, fitness, match_awareness } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : '';
    const newPlayer = await Player.create({
      name, age, nationality, category, batting, bowling, fielding, fitness, match_awareness, photo,
    });
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPlayers };

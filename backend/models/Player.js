const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Player = sequelize.define('Player', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  batting: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bowling: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fielding: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fitness: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  match_awareness: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync();

module.exports = Player;
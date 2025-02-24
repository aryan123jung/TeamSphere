// const { Pool } = require('pg');
// const pool = require('../database/db');

// const User = {
//   async create(name, email, password) {
//     const query = `INSERT INTO Users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`;
//     const values = [name, email, password];
//     const { rows } = await pool.query(query, values);
//     return rows[0];
//   },
//   async findByEmail(email) {
//     const query = `SELECT * FROM Users WHERE email = $1;`;
//     const { rows } = await pool.query(query, [email]);
//     return rows[0];
//   }
// };
// module.exports = User;

//  const {Datatypes} = require('sequelize');
//  const sequelize = require('../config/db');

//  const User = sequelize.define('User', {
//     id:{
//         type: Datatypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     username:{
//         type: DataTypes.STRING,
//         allowNull : false,
//     },
    
//     password : {
//         type : DataTypes.STRING,
//         allowNull : false,
//     },
//  })
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Hash password before saving to the database
User.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

module.exports = User;
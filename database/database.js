require('dotenv').config()
const Sequelize = require("sequelize")
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const connection = new Sequelize(config.database, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

module.exports = connection
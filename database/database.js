require('dotenv').config()
const Sequelize = require("sequelize")

const connection = new Sequelize('guiaperguntasdb', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.host,
    dialect: 'mysql'
})

module.exports = connection
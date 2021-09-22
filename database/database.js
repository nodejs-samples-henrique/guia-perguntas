require("dotenv").config();
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: "mysql",
});

module.exports = connection;
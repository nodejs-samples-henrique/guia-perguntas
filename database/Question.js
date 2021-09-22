const Sequelize = require('sequelize')
const connection = require('./database')

const Question = connection.define('Questions', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    desc: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Question
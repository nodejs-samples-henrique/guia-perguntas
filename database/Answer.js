const Sequelize = require('sequelize')
const connection = require('./database')

const Answer = connection.define('Answers', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Answer
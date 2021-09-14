const Sequelize = require('sequelize')
const connection = require('../database')

const Answer = connection.define('answers', {
    askID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// Answer.sync({force: false}).then(()=> {
//     console.log('<<<<<<<< -------------- Tabela Answer Criada ----------- >>>>>>>>')
// })

module.exports = Answer
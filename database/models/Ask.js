const Sequelize = require('sequelize')
const connection = require('../database')

const Ask = connection.define('ask', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// Ask.sync({force: true}).then(()=> {
//      console.log('<<<<<<<< -------------- Tabela Ask Criada ----------- >>>>>>>>')
// })

module.exports = Ask
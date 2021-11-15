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

            // função que cria as tabelas
// Ask.sync({ force: true }).then(()=> {
Ask.sync().then(()=> {
     console.log('<<<<<<<< -------------- Tabela Ask Criada ----------- >>>>>>>>')
})

module.exports = Ask
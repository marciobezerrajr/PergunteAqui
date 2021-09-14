const Sequelize = require('sequelize')

const connection = new Sequelize('pergunteaqui', 'root', '123456', {
    host:'localhost',
    dialect: 'mysql'
})

connection.authenticate().then(() => {
    console.log('Banco conectado com sucesso')
}).catch((err) => {
    console.log('Erro: ' + err)
})

module.exports = connection
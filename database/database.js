const Sequelize = require('sequelize')

//configurações e credenciais de conexão
const connection = new Sequelize('pergunteaqui', 'root', '123456', {
    host:'localhost',
    dialect: 'mysql'
})

//teste de conexão do banco de dados
connection.authenticate().then(() => {
    console.log('Banco conectado com sucesso')
}).catch((err) => {
    console.log('Erro: ' + err)
})

module.exports = connection
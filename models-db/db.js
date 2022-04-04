const Sequelize = require('sequelize')

//Conexão com o banco de dados
    const sequelize = new Sequelize('contatos', 'root', 'Ytwx7ghZZ', {
        host: 'localhost',
        dialect: 'mysql',
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
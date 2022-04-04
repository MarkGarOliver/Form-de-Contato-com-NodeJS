const db = require('./db')

const Contato = db.sequelize.define('infodecontatos', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Contato
//Contato.sync({force: true})
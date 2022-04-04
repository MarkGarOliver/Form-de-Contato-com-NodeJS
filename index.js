const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const Contato = require("./models-db/Contato")


//config
    app.use(bodyparser.urlencoded({extended: false}))
    app.use(bodyparser.json())


//Rotas

    app.get("/contato", function(req, res){
        res.sendFile(__dirname + "/form/index.html")
    })  


    //recebe dados do form
    app.post("/add", function(req, res){
        Contato.create({ //cria o registro no banco de dados das informações de contato
            nome: req.body.nome,
            email: req.body.email,
            mensagem: req.body.mensagem
        }).then(function(){ //Caso seja concluido com sucesso exibe essa mensagem
            res.send('mensagem enviada com sucesso !')
        }).catch(function(erro){ //caso ocorra um erro ele irá exibir o erro 
            res.send('Houve um erro: ' + erro)
        })
    })




app.listen(8081, function(){
    console.log('Server on....')
})
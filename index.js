const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const Contato = require("./models-db/Contato")
const handlebars = require('express-handlebars')


//config
    //body-parser
        app.use(bodyparser.urlencoded({extended: false}))
        app.use(bodyparser.json())
    //handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions: {
            allowProtoMethodsByDefault: true,

            allowProtoPropertiesByDefault: true
        }}))
        app.set('view engine', 'handlebars')
        app.set('views', './views')


//Rotas
    
    /*
    Na rota / pegamos todos os dados vindos de Contato(dados do DB) e com o then atribuimos isso a contato(parametro passado na função then), e na renderização, passamos todos esses dados com o nome contatos

    obs: dentro da função findAll, foi passado o Order para ordenar como decrescente, exibindo no mais novo para o mais antigo
    */
    app.get('/', (req, res) => {
        Contato.findAll({order: [['id', 'DESC']]}).then(function(contato){
            res.render('home', {contatos: contato})
        })
        
    })

    //rota do form de contato
    app.get("/contato", function(req, res){
        res.render("formulario")
    })  


    //rota que recebe dados do form, e com esses dados criamos o registro no database
    app.post("/add", function(req, res){
        Contato.create({ //cria o registro no banco de dados das informações de contato
            nome: req.body.nome,
            email: req.body.email,
            mensagem: req.body.mensagem
        }).then(function(){ //Caso seja concluido com sucesso exibe essa mensagem
            res.redirect('/')
        }).catch(function(erro){ //caso ocorra um erro ele irá exibir o erro 
            res.send('Houve um erro: ' + erro)
        })
    })





app.listen(8081, function(){
    console.log('Server on....')
})
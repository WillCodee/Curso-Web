const express = require('express');
const route = express.Router()
const homeController = require('./src/Controllers/homeController')
const contatoController = require('./src/Controllers/contatoController')
const globalMiddleware = require('./src/Middlewares/middleware')

// function meuMiddleware(req, res,next){
//     // req.session ={nome: 'Luiz', sobrenome:'DaViola'} //middleware
//     console.log()
//     console.log('Passei no seu middleware')
//     console.log()
//     next()
// }


//Rotas da Home
route.get('/',  homeController.paginaInicial) /*function(req, res, next){
    console.log()
    console.log('Ainda estou aqui')
    console.log(`Pagina Inicial: Olha isso ->${req.session.nome}`)
})*/
route.post('/', homeController.trataPost)

//Rotas de Contato
route.get('/contato',contatoController.paginaInicial)

module.exports = route
